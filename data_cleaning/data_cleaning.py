import pandas as pd
from helpers import replace_c_with_brackets, parse_duration


class DataCleaner:
    def __init__(self, input_file, output_file):
        self.input_file = input_file
        self.output_file = output_file
        self.df = None

    def load_data(self):
        self.df = pd.read_csv(self.input_file)

    def drop_columns(self, columns):
        self.df = self.df.drop(columns=columns)

    def apply_to_columns(self, columns, func):
        for column in columns:
            self.df[column] = self.df[column].apply(func)

    def save_data(self):
        self.df.to_csv(self.output_file, index=False)
        print(f"Data saved to {self.output_file}")

    def clean_data(self):
        self.load_data()
        self.drop_columns(['AuthorId', 'AuthorName', 'DatePublished'])
        self.apply_to_columns(['Images', 'Keywords', 'RecipeIngredientQuantities',
                               'RecipeIngredientParts', 'RecipeInstructions'],
                              lambda x: replace_c_with_brackets(x) if isinstance(x, str) else '[]')
        self.apply_to_columns(
            ['PrepTime', 'CookTime', 'TotalTime'], parse_duration)


if __name__ == "__main__":
    cleaner = DataCleaner("./data/recipes.csv",
                          "./data/collection/modified_recipes.csv")
    cleaner.clean_data()
    cleaner.save_data()
