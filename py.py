import os

def print_directory_structure(path, indent=0):
    # Vérifie si le chemin donné existe
    if os.path.exists(path):
        # Affiche le nom du dossier courant
        print(' ' * indent + os.path.basename(path) + '/')
        
        # Parcourt tous les fichiers et sous-dossiers
        for item in os.listdir(path):
            item_path = os.path.join(path, item)
            if os.path.isdir(item_path):
                print_directory_structure(item_path, indent + 4)  # Indentation pour les sous-dossiers
            else:
                print(' ' * (indent + 4) + item)  # Indentation pour les fichiers
    else:
        print(f"Le chemin spécifié n'existe pas : {path}")

# Spécifiez le chemin de votre projet
project_path = r'C:\Users\abdel\Desktop\AI-Engineer\ai-engineer'
print_directory_structure(project_path)
