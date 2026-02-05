import pytesseract
from PIL import Image
import pdf2image
import re
import os

# Set the path to tesseract executable (adjust if needed)
# You may need to install Tesseract OCR and set the path
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def extract_text_from_pdf_ocr(pdf_path):
    """Extract text using OCR from PDF pages"""
    try:
        # Convert PDF to images
        pages = pdf2image.convert_from_path(pdf_path, dpi=200)
        print(f"Converted PDF to {len(pages)} images")
        
        full_text = ""
        for i, page in enumerate(pages):
            print(f"Processing page {i+1}...")
            # Extract text using OCR
            text = pytesseract.image_to_string(page)
            full_text += text + "\n\n"
        
        return full_text
    except Exception as e:
        print(f"Error with OCR extraction: {e}")
        return None

def extract_sustainability_impact(text):
    """Extract sustainability impact information from text"""
    if not text:
        return None
    
    # Save extracted text for review
    with open("extracted_sustainability_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    
    print(f"Extracted {len(text)} characters")
    
    # Look for sustainability-related keywords
    impact_keywords = [
        'environmental', 'impact', 'sustainability', 'benefit', 'social', 'economic',
        'waste', 'reduction', 'emission', 'resource', 'efficiency', 'divert', 'landfill',
        'conversion', 'efficiency', 'yield', 'fuel', 'revenue', 'economic value',
        'cleaner', 'energy', 'burden', 'cost', 'savings', 'local', 'decentralized',
        'micro-scale', 'employment', 'community', 'benefit', 'opportunity'
    ]
    
    # Split into paragraphs
    paragraphs = [p.strip() for p in text.split('\n\n') if p.strip()]
    
    relevant_paragraphs = []
    for i, para in enumerate(paragraphs):
        para_lower = para.lower()
        keyword_count = sum(1 for keyword in impact_keywords if keyword in para_lower)
        if keyword_count > 0:
            relevant_paragraphs.append({
                'index': i,
                'text': para,
                'length': len(para),
                'keywords': keyword_count
            })
    
    # Sort by relevance (keyword count)
    relevant_paragraphs.sort(key=lambda x: x['keywords'], reverse=True)
    
    print(f"\nFound {len(relevant_paragraphs)} relevant paragraphs")
    
    # Save relevant paragraphs
    with open("sustainability_relevant_paragraphs.txt", "w", encoding="utf-8") as f:
        for rp in relevant_paragraphs:
            f.write(f"--- Paragraph {rp['index']} (Keywords: {rp['keywords']}) ---\n")
            f.write(rp['text'] + "\n")
            f.write("-" * 80 + "\n\n")
    
    return relevant_paragraphs

def main():
    pdf_path = "Plastic_Waste_Conversion_Economics.pdf"
    
    if not os.path.exists(pdf_path):
        print(f"PDF file not found: {pdf_path}")
        return
    
    print("Extracting text using OCR...")
    text = extract_text_from_pdf_ocr(pdf_path)
    
    if not text or len(text.strip()) < 100:
        print("Failed to extract sufficient text from PDF")
        print("This PDF might be password-protected or have other restrictions")
        return
    
    print("Extracting sustainability impact information...")
    relevant_content = extract_sustainability_impact(text)
    
    if relevant_content:
        print(f"\nMost relevant sustainability paragraphs:")
        print("=" * 80)
        for i, rp in enumerate(relevant_content[:5]):
            print(f"Paragraph {rp['index']} (Keywords: {rp['keywords']}) - {rp['length']} chars:")
            print(rp['text'][:500] + "..." if len(rp['text']) > 500 else rp['text'])
            print("-" * 80)
        
        print("\nFiles created:")
        print("- extracted_sustainability_text.txt: Full extracted text")
        print("- sustainability_relevant_paragraphs.txt: Relevant paragraphs for impact assessment")
    else:
        print("No sustainability-related content found")

if __name__ == "__main__":
    main()