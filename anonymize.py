"""
Script for anonymizing data
"""
import os
import csv
import pandas as pd
from argparse import ArgumentParser

cols_to_drop = [
    "RecipientLastName",
    "RecipientFirstName",
    "RecipientEmail",
    "ExternalDataReference",
    "IPAddress",
    "LocationLatitude",
    "LocationLongitude",
    "PROLIFIC_PID",
    "prolificID"
]


def anonymize_data_file(file_path):
    df = pd.read_csv(file_path)

    # Drop only columns that actually exist
    cols_present = [c for c in cols_to_drop if c in df.columns]
    df = df.drop(columns=cols_present)

    anon_file_path = file_path.replace(".csv", "-anon.csv")
    df.to_csv(anon_file_path, index=False)


def get_raw_data_files(root_dir):
    """
    Retrieve data files from a directory.
    """
    all_data_files = []
    for path in os.walk(root_dir):
        # if the path contains a non-anonymized csv
        for filename in path[2]:
            if (
                filename.split(".")[-1] == "csv"
                and filename.split("-")[-1] != "anon.csv"
            ):
                all_data_files.append("/".join([path[0], filename]))

    return all_data_files


parser = ArgumentParser()
parser.add_argument("--root_dir", type=str, default="data")

if __name__ == "__main__":
    args = parser.parse_args()
    raw_data_files = get_raw_data_files(args.root_dir)

    for data_file in raw_data_files:
        print(f"anonymizing {data_file}...")
        anonymize_data_file(data_file)
