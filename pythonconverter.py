import pandas as pd
import csv
import json

#df = pd.read_csv("abertura.csv")
#df.to_json('abertura.json')



def make_json(csvFilePath, jsonFilePath):
    # create a dictionary
    data = {}

    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        # Convert each row into a dictionary
        # and add it to data
        aux=0
        for rows in csvReader:
            # Assuming a column named 'No' to
            # be the primary key

            data[aux] = rows
            aux += 1

    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))


# Driver Code

# Decide the two file paths according to your
# computer system
csvFilePath = r'semanadaQuimica.csv'
jsonFilePath = r'semanadaQuimica.json'

# Call the make_json function
make_json(csvFilePath, jsonFilePath)