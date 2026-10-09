export const focusAreas = [
  {
    title: "Data Work",
    description: "I like the practical part of data engineering: moving data from messy sources into layers that people can trust and reuse."
  },
  {
    title: "Systems Thinking",
    description: "I pay attention to retries, backfills, validation, naming, and the small operational details that make pipelines easier to live with."
  },
  {
    title: "Technical Notes",
    description: "I use this site as a place to document projects, architecture decisions, data flow, and lessons learned from building data systems."
  },
  {
    title: "Direction",
    description: "I am growing toward Data Platform Engineering: reliable data workflows, clear models, observability, and maintainable systems."
  }
];

export const nowItems = [
  {
    title: "Building",
    description: "A personal financial market ELT pipeline that collects public API data, keeps raw records, models analytical tables, and documents reliability decisions."
  },
  {
    title: "Practicing",
    description: "Batch ETL/ELT, API ingestion, dbt modeling, Airflow/GitHub Actions orchestration, data quality checks, and date-based backfill patterns."
  },
  {
    title: "Writing Down",
    description: "Project context, tradeoffs, failure handling, and the reasoning behind each data workflow so the work is easier to inspect later."
  }
];

export const projects = [
  {
    title: "Blue Dragon Reporting Platform",
    status: "L'INNO / Client Project",
    problem: "Extended a reporting system for donation and transaction analysis by integrating PayPal data from four regional REST APIs with existing GiveCloud donation data.",
    decisions: "Designed a Python data collector, stored raw API responses in Google Cloud Storage, loaded structured data into BigQuery, and prepared fact, dimension, and reporting-ready datasets for Looker Studio reporting.",
    reliability: "Implemented workflow-level retry, investigated failed loads, backfilled affected dates, checked mapped Salesforce records, normalized fields and data types, and reconciled reporting data without exposing donor or transaction details.",
    tags: ["Python", "REST API", "GCS", "BigQuery", "GitHub Actions", "Looker Studio"]
  },
  {
    title: "Internal Analytics Data Pipeline",
    status: "Savvycom / Internal Project",
    problem: "Built an internal analytics pipeline foundation to collect, process, and prepare data for department-level analytics use cases where business requirements were still being clarified.",
    decisions: "Worked with stakeholders, identified relevant data sources, designed raw, staging, and transformed layers, used Python and SQL for processing, Airflow for orchestration, and dbt for transformation and modeling.",
    reliability: "Tracked Airflow DAG and task status, investigated task failures, validated transformation outputs, checked nulls, duplicates, data types, and reconciled results against department requirements. The gold layer is described honestly as not fully completed because the final business use case was not clear enough.",
    tags: ["Python", "SQL", "Airflow", "dbt", "BigQuery", "PostgreSQL"]
  },
  {
    title: "Financial Market Data Collection & ELT Pipeline",
    status: "Personal Project",
    problem: "Designing an ELT pipeline to collect and normalize financial market data from public APIs for analysis across stock, crypto, exchange-rate, macroeconomic, and fixed-income sources where allowed.",
    decisions: "Planned Python and dlt ingestion, raw data structure, schema normalization, incremental loading, run metadata, warehouse loading, dbt staging models, analytical models, scheduling, monitoring, and architecture documentation.",
    reliability: "Planned retry for API timeout and temporary failures, date-based backfill, run logs, row count checks, freshness checks, schema validation, duplicate checks, and range validation. Planned items remain described as planned until the code is complete.",
    tags: ["Python", "dlt", "dbt Core", "REST API", "PostgreSQL", "BigQuery"]
  },
  {
    title: "Accounting BI Dashboard",
    status: "Savvycom / Internal Project",
    problem: "Prepared accounting data for an internal financial reporting dashboard using files managed by the accounting department.",
    decisions: "Connected data from OneDrive, cleaned Excel files, normalized column names and data types, used Power Query, built a Power BI reporting model, and prepared dashboard data for internal users.",
    reliability: "Checked refresh status, Power Query errors, dashboard output, missing values, data types, aggregate values, and reconciled results against source accounting reports without publishing financial figures or internal data.",
    tags: ["Power BI", "Power Query", "Excel", "OneDrive", "Data Modeling"]
  },
  {
    title: "Student Performance Prediction Pipeline",
    status: "HUST / iBME Lab",
    problem: "Built a data processing and model pipeline for predicting student academic performance within a research context using cleaned and anonymized data.",
    decisions: "Handled missing values, normalized data, performed exploratory analysis and feature engineering, split train/test data, compared models, persisted the model with Joblib, and built a Streamlit inference interface.",
    reliability: "Tracked training results, evaluation outputs, inference errors, input validation, outlier review, data type checks, feature validation, and train/test consistency. No unverified model metrics are published.",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Joblib", "Streamlit"]
  }
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "Bash"]
  },
  {
    title: "Data Engineering",
    skills: ["ETL/ELT", "REST API Ingestion", "Batch Processing", "Incremental Loading", "Retry", "Backfill"]
  },
  {
    title: "Warehouse & Cloud",
    skills: ["BigQuery", "Google Cloud Storage", "PostgreSQL", "MySQL", "Google Compute Engine"]
  },
  {
    title: "Transformation & Orchestration",
    skills: ["Apache Airflow", "GitHub Actions", "dbt Core", "dlt"]
  },
  {
    title: "Reporting & Modeling",
    skills: ["Power BI", "Looker Studio", "Power Query", "Fact Tables", "Dimension Tables", "SCD Type 2"]
  },
  {
    title: "ML & Analysis",
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Jupyter", "Streamlit"]
  }
];