#!/usr/bin/env python3
"""
Convert RAJAPerf CSV timing data to GitHub benchmark action JSON format.

Usage: python csv_to_github_benchmark.py input.csv output.json
"""

import csv
import json
import sys
from pathlib import Path

def csv_to_benchmark_json(csv_file, output_file):
    """Convert RAJAPerf timing CSV to GitHub benchmark JSON format."""

    benchmarks = []

    with open(csv_file, 'r') as f:
        reader = csv.reader(f)
        lines = list(reader)

    if len(lines) < 4:
        print("Error: CSV file doesn't have expected format")
        return

    # Parse variant names from line 1
    variants = [v.strip() for v in lines[1][1:] if v.strip()]

    # Process data rows (skipping 3 header lines)
    for line in lines[3:]:
        if not line or not line[0].strip():
            continue

        kernel_name = line[0].strip()
        if not kernel_name:
            continue

        # Create benchmark entries for each variant
        for i, variant in enumerate(variants):
            if i + 1 < len(line):
                try:
                    time_sec = float(line[i + 1])
                    # Convert to milliseconds for better readability
                    time_ms = time_sec * 1000

                    benchmark = {
                        "name": f"{kernel_name}_{variant}",
                        "unit": "ms",
                        "value": time_ms
                    }
                    benchmarks.append(benchmark)
                except (ValueError, IndexError):
                    continue

    # Write JSON output
    with open(output_file, 'w') as f:
        json.dump(benchmarks, f, indent=2)

    print(f"Converted {len(benchmarks)} benchmarks to {output_file}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python csv_to_github_benchmark.py input.csv output.json")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    if not Path(input_file).exists():
        print(f"Error: Input file {input_file} not found")
        sys.exit(1)

    csv_to_benchmark_json(input_file, output_file)
