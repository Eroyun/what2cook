import re


def parse_duration(duration_str):
    if not isinstance(duration_str, str):
        return "NA"

    match = re.match(
        r"^PT((?P<hours>\d+)H)?((?P<minutes>\d+)M)?$", duration_str)

    if match:
        hours = int(match.group("hours")) if match.group("hours") else 0
        minutes = int(match.group("minutes")) if match.group("minutes") else 0
        return hours * 60 + minutes
    else:
        return "NA"


def replace_c_with_brackets(data):
    if data == 'character(0)':
        return '[]'
    pattern = r'(?s)c\((.*?)\)'
    result = re.sub(pattern, r'[\1]', data)
    return result
