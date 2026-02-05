import pdfplumber
import re

def extract_text_with_pdfplumber(pdf_path):
    """Extract text using pdfplumber"""
    text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception as e:
        print(f"Error reading PDF with pdfplumber: {e}")
    return text

def analyze_pdf_content():
    """Analyze the PDF content thoroughly"""
    pdf_path = "Plastic_Waste_Conversion_Economics.pdf"
    
    print("Extracting text using pdfplumber...")
    text = extract_text_with_pdfplumber(pdf_path)
    
    print(f"Total characters extracted: {len(text)}")
    print(f"Total words: {len(text.split())}")
    
    if len(text) < 100:
        print("Warning: Very little text extracted. PDF might be scanned/image-based.")
        return None
    
    # Save extracted text for manual review
    with open("extracted_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    
    print("Text saved to 'extracted_text.txt' for review")
    
    # Look for market analysis patterns
    market_keywords = [
        'market', 'demand', 'capacity', 'revenue', 'economic', 'financial',
        'city', 'region', 'location', 'waste', 'plastic', 'processing',
        'opportunity', 'potential', 'size', 'scale'
    ]
    
    # Split into paragraphs
    paragraphs = [p.strip() for p in text.split('\n\n') if p.strip()]
    
    market_paragraphs = []
    for i, para in enumerate(paragraphs):
        para_lower = para.lower()
        if any(keyword in para_lower for keyword in market_keywords):
            market_paragraphs.append({
                'index': i,
                'text': para,
                'length': len(para)
            })
    
    print(f"\nFound {len(market_paragraphs)} potentially relevant paragraphs")
    
    # Display relevant paragraphs
    for mp in market_paragraphs[:10]:  # Show first 10
        print(f"\n--- Paragraph {mp['index']} ({mp['length']} chars) ---")
        print(mp['text'][:500] + "..." if len(mp['text']) > 500 else mp['text'])
        print("-" * 50)
    
    return text

if __name__ == "__main__":
    analyze_pdf_content()