def get_time_range(totalTime):
    time_ranges = {
        0: {'lt': 30},
        1: {'gte': 30, 'lt': 60},
        2: {'gte': 60, 'lt': 240},
        3: {'gte': 240}
    }

    range_values = time_ranges.get(totalTime, {})
    return range_values.get('gt'), range_values.get('gte'), range_values.get('lt'), range_values.get('lte')
