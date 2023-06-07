import re
def convert_px_to_rem(css_file_path, output_file_path):
    with open(css_file_path, 'r') as css_file:
        css_content = css_file.read()

    # Find pixel values using regular expressions and divide them by 16
    converted_css = re.sub(r'(\d+)px', lambda match: str(int(match.group(1)) / 16) + 'rem', css_content)

    with open(output_file_path, 'w') as output_file:
        output_file.write(converted_css)
# Usage example
css_file_path = 'C:/Users/richo/Desktop/Programming/Work/Creativities/madar.css'
output_file_path = 'C:/Users/richo/Desktop/Programming/Work/Creativities/madar.css'
convert_px_to_rem(css_file_path, output_file_path)
