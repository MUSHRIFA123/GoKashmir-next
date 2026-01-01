# locality: Adding 4 nearest locality to each
# ref: https://www.phind.com/search?cache=u6xacpekfpc8y3g9dc5cznsw
# open python in /backup-db/backup-db/vc_visitbangalore_staging1_db/2025-01-16/ folder

import json
from math import radians, cos, sin, asin, sqrt

# Function to calculate the Haversine distance
def haversine(lat1, lon1, lat2, lon2):
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a)) 
    km = 6371 * c
    return km

# Function to find the four nearest localities for each locality
def find_four_nearest_localities(localities):
    for locality in localities:
        distances = []
        for other in localities:
            if locality['slug'] != other['slug']:
                dist = haversine(locality['latitude'], locality['longitude'],
                                 other['latitude'], other['longitude'])
                distances.append((dist, other))
        # Sort the distances and get the four nearest
        distances.sort(key=lambda x: x[0])
        nearest_localities = [
            {
                "name": loc["name"],
                "slug": loc["slug"],
                "image_ugc": loc["images_ugc"][0]
            } for _, loc in distances[:4]
        ]
        # Add the nearest localities to the locality
        locality['nearest_localities'] = nearest_localities

# Read the JSON file
input_file = 'vc_visitbangalorein_staging1_db.localities.json'
with open(input_file, 'r', encoding='utf-8') as file:
    localities = json.load(file)

# Find and add nearest localities to each locality
find_four_nearest_localities(localities)

# Define the output file name
output_file = input_file.replace('.json', '_with_nearest_localities.json')

# Write the updated data to a new JSON file
with open(output_file, 'w', encoding='utf-8') as file:
    json.dump(localities, file, ensure_ascii=False, indent=4)

print(f"Updated data saved to {output_file}")

