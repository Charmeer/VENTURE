import PyPDF2
import re

def extract_pdf_text(pdf_path):
    """Extract text from PDF file"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading PDF: {e}")
    return text

def find_market_analysis(text):
    """Find market analysis sections in the text"""
    # Look for market-related sections
    market_patterns = [
        r'market\s+analysis',
        r'market\s+size',
        r'market\s+opportunity',
        r'demand',
        r'processing\s+capacity',
        r'revenue\s+potential',
        r'city.*waste',
        r'region.*waste',
        r'plastic\s+waste.*market',
        r'economic.*potential'
    ]
    
    results = {}
    
    # Split text into sections to better organize findings
    sections = re.split(r'\n\s*\n', text)
    
    market_sections = []
    for i, section in enumerate(sections):
        section_lower = section.lower()
        if any(re.search(pattern, section_lower) for pattern in market_patterns):
            market_sections.append({
                'section_number': i,
                'content': section.strip(),
                'word_count': len(section.split())
            })
    
    return market_sections

def extract_specific_data(text):
    """Extract specific market data like capacities, revenues, locations"""
    data = {
        'capacities': [],
        'revenues': [],
        'locations': [],
        'demand_indicators': []
    }
    
    # Extract capacity information (tons per day/month)
    capacity_patterns = [
        r'(\d+(?:\.\d+)?)\s*(?:ton|metric ton|MT|kg)[s]?\s*(?:per\s+day|per\s+month|daily|monthly)',
        r'(\d+(?:\.\d+)?)\s*TPD',
        r'(\d+(?:\.\d+)?)\s*TDP',
        r'processing\s+capacity.*?(\d+(?:\.\d+)?)',
        r'capacity.*?(\d+(?:\.\d+)?)\s*(?:ton|MT)'
    ]
    
    for pattern in capacity_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        data['capacities'].extend(matches)
    
    # Extract revenue information
    revenue_patterns = [
        r'\$?(\d+(?:,\d{3})*(?:\.\d+)?)\s*(?:million|billion|crore|lakh)?\s*(?:revenue|income|earnings)',
        r'revenue.*?\$?(\d+(?:,\d{3})*(?:\.\d+)?)',
        r'income.*?\$?(\d+(?:,\d{3})*(?:\.\d+)?)',
        r'earnings.*?\$?(\d+(?:,\d{3})*(?:\.\d+)?)'
    ]
    
    for pattern in revenue_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        data['revenues'].extend(matches)
    
    # Extract location/city information
    location_pattern = r'(?:city|region|location|area).*?(?:\w+\s*\w*)'
    matches = re.findall(location_pattern, text, re.IGNORECASE)
    data['locations'].extend(matches)
    
    # Extract demand indicators
    demand_patterns = [
        r'demand.*?(\d+(?:\.\d+)?)',
        r'(\d+(?:\.\d+)?)\s*%?\s*demand',
        r'waste\s+generation.*?(\d+(?:\.\d+)?)'
    ]
    
    for pattern in demand_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        data['demand_indicators'].extend(matches)
    
    return data

# Main execution
if __name__ == "__main__":
    pdf_path = "Plastic_Waste_Conversion_Economics.pdf"
    
    print("Extracting text from PDF...")
    pdf_text = extract_pdf_text(pdf_path)
    
    print(f"Total text extracted: {len(pdf_text)} characters")
    
    print("\nSearching for market analysis sections...")
    market_sections = find_market_analysis(pdf_text)
    
    print(f"\nFound {len(market_sections)} market-related sections:")
    for section in market_sections:
        print(f"Section {section['section_number']}: {section['word_count']} words")
        print(f"Preview: {section['content'][:200]}...")
        print("-" * 50)
    
    print("\nExtracting specific market data...")
    market_data = extract_specific_data(pdf_text)
    
    print("\n=== MARKET ANALYSIS DATA ===")
    print("Capacities found:", market_data['capacities'])
    print("Revenues found:", market_data['revenues'])
    print("Locations found:", market_data['locations'][:10])  # First 10 locations
    print("Demand indicators:", market_data['demand_indicators'])