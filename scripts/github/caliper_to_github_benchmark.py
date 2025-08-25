#!/usr/bin/env python3
"""
Convert Caliper JSON output to GitHub benchmark action JSON format.

Usage: python caliper_to_github_benchmark.py input.json output.json
"""

import json
import sys
from pathlib import Path

def caliper_to_benchmark_json(input_file):
    """Convert one Caliper JSON file to benchmark format.
    Args:
        input_file: Path to Caliper JSON file
    Returns:
        List of benchmark dictionaries
    """

    filename = Path(input_file).stem
    variant = filename.split('-')[0]

    with open(input_file, 'r') as f:
        caliper_data = json.load(f)

    benchmarks = []

    for record in caliper_data:
        # Look for records with path and timing data
        if 'path' in record and 'avg#inclusive#sum#time.duration' in record:
            path = record['path']
            # Convert seconds to milliseconds for better readability
            time_sec = record['avg#inclusive#sum#time.duration']
            time_ms = time_sec * 1000

            # Only include leaf-level kernel paths, skip parent group timings
            # Leaf kernels have at least 3 path segments: "RAJAPerf/Basic/KernelName"
            path_parts = path.split("/")
            if len(path_parts) >= 3 and path_parts[-1] != path_parts[-2]:
                kernel_name = path_parts[-1]
                benchmark = {
                    "name": f"{kernel_name}_{variant}",
                    "unit": "ms",
                    "value": time_ms
                }
                benchmarks.append(benchmark)

    return benchmarks

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python caliper_to_github_benchmark.py input1.json [input2.json ...] output.json")
        sys.exit(1)

    input_files = sys.argv[1:-1]  # All arguments except the last
    output_file = sys.argv[-1]    # Last argument is output file

    # Check all input files exist
    for input_file in input_files:
        if not Path(input_file).exists():
            print(f"Error: Input file {input_file} not found")
            sys.exit(1)

    # Process each input file and combine results
    all_benchmarks = []
    for input_file in input_files:
        benchmarks = caliper_to_benchmark_json(input_file)
        all_benchmarks.extend(benchmarks)

    # Write combined JSON output
    with open(output_file, 'w') as f:
        json.dump(all_benchmarks, f, indent=2)

    print(f"Converted {len(all_benchmarks)} Caliper benchmarks from {len(input_files)} files to {output_file}")
