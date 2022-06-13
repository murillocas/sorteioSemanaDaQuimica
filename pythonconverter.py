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
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'CredenciamentoVespertino.csv'
jsonFilePath = r'CredenciamentoVespertino.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Gincana.csv'
jsonFilePath = r'Gincana.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'CredenciamentoNoturno.csv'
jsonFilePath = r'CredenciamentoNoturno.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'ConferenciaAbertura.csv'
jsonFilePath = r'ConferenciaAbertura.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'PalestraAbertura.csv'
jsonFilePath = r'PalestraAbertura.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Oficina1.csv'
jsonFilePath = r'Oficina1.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Oficina2.csv'
jsonFilePath = r'Oficina2.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Oficina3.csv'
jsonFilePath = r'Oficina3.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Oficina4.csv'
jsonFilePath = r'Oficina4.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Oficina5.csv'
jsonFilePath = r'Oficina5.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Oficina6.csv'
jsonFilePath = r'Oficina6.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Oficina7.csv'
jsonFilePath = r'Oficina7.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'Oficina8.csv'
jsonFilePath = r'Oficina8.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'CerimoniaEncerramento.csv'
jsonFilePath = r'CerimoniaEncerramento.json'
make_json(csvFilePath, jsonFilePath);

csvFilePath = r'PalestraEncerramento.csv'
jsonFilePath = r'PalestraEncerramento.json'
make_json(csvFilePath, jsonFilePath);
