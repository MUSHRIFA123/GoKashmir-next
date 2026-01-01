# place: Adding 4 nearest place to each
# ref: https://www.phind.com/search?cache=u6xacpekfpc8y3g9dc5cznsw
# open python in /backup-db/backup-db/vc_visitbangalore_staging1_db/2025-01-16/ folder

import json
from math import radians, cos, sin, asin, sqrt
import random

# Function to calculate the Haversine distance
def haversine(lat1, lon1, lat2, lon2):
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a)) 
    km = 6371 * c
    return km

# Function 'find_four_nearest_places' to find the four nearest places for each place
def find_four_nearest_places(places):
    for place in places:
        distances = []
        for other in places:
            if place['slug'] != other['slug']:
                dist = haversine(place['latitude'], place['longitude'],
                                 other['latitude'], other['longitude'])
                distances.append((dist, other))
        # Sort the distances and get the four nearest
        distances.sort(key=lambda x: x[0])
        nearest_places = [
            {
                "title": loc["title"],
                "slug": loc["slug"],
                "image_ugc": loc["images_ugc"][0],
                "category_slug": loc["category_slug"],
                "subcategory_slug": loc["subcategory_slug"]
            } for _, loc in distances[:30]
        ]
        # Add the nearest places to the place
        # FILTER NEAREST FOR CATEGORIES
        place['nearby_restaurants'] = [item for item in nearest_places if (item.get("subcategory_slug") == 'restaurants')][:4]
        nearby_attractions = [item for item in nearest_places if (item.get("category_slug") == 'attractions')][:8]
        random.shuffle(nearby_attractions)
        place['nearby_attractions'] = nearby_attractions[:4]
        place['nearby_shopping_malls'] = [item for item in nearest_places if (item.get("subcategory_slug") == 'shopping-malls')][:4]


# Function to find the same category places for given place and add it to related_places
# "category" and "category_slug" are given for each place
def add_same_category_places(places):
    for place in places:
        # Find all other places with the same category
        same_cat = [
            other for other in places
            if other['slug'] != place['slug']
            and other.get('category_slug', '') == place.get('category_slug', '')
        ]
        # Limit them to 10
        same_cat = same_cat
        random.shuffle(same_cat)
        # Build the related_places list with only title, slug, images_ugc
        place['related_places'] = [
            {
                "title": cat_place["title"],
                "slug": cat_place["slug"],
                "image_ugc": cat_place["images_ugc"][0]
            }
            for cat_place in same_cat[:4]
        ]

# Read the JSON file
input_file = 'vc_visitbangalorein_staging1_db.places.json'
with open(input_file, 'r', encoding='utf-8') as file:
    places = json.load(file)

# Find and add nearest places to each place
find_four_nearest_places(places)
add_same_category_places(places)

# Define the output file name
output_file = input_file.replace('.json', '_with_nearest_places.json')

# Write the updated data to a new JSON file
with open(output_file, 'w', encoding='utf-8') as file:
    json.dump(places, file, ensure_ascii=False, indent=4)

print(f"Updated data saved to {output_file}")
