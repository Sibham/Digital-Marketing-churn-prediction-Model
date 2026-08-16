# Talknlock AI – Client Churn Prediction System

This repository contains the client churn prediction model and dashboard prototype for Talknlock Pvt. Ltd.

## Project Structure
- `data/`: Contains the client dataset (`client_churn_marketing_dataset_1000.csv`).
- `notebooks/`: Contains the exploratory data analysis (EDA) and model training notebook.
- `architecture/`: Architecture diagram for the end-to-end production pipeline.
- `prototype/`: HTML/CSS/JS files for the account manager dashboard prototype.

## Setup
1. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Jupyter Notebook to train the model and explore the dataset:
   ```bash
   jupyter notebook
   ```
4. To view the dashboard, open `prototype/index.html` in any web browser.
