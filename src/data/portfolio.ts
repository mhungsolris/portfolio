// Approved content source: W:/Profile/doc_preview/PORTFOLIO_CONTENT_UPDATE.md
// Re-read the brief before changing public claims; learning is separate from production experience.

export const copy = {
  "heroIntro": "I build and operate production data pipelines, analytics platforms, and reporting systems — from requirement clarification and multi-source ingestion to modeling, validation, monitoring, and backfills.",
  "aboutIntro": "This site is my technical home — a place to document the production systems I have worked on, the projects I have built, and how I approach Data Engineering problems from requirements to reliable delivery.",
  "resumeIntro": "A concise overview of my professional experience, production Data Engineering work, skills, and selected projects.",
  "contactIntro": "Based in Hanoi, Vietnam. Open to Data Engineer opportunities, especially remote roles and teams working on production data platforms, analytics infrastructure, or data-intensive products."
};

export const experiences = [
  {
    "title": "Data Engineer",
    "context": "Yuta Labs · Full-time",
    "date": "Apr 2026 – Present",
    "body": "Own the Data Engineering scope for a production analytics platform covering advertising cost, revenue, near-real-time reporting, Airflow/BigQuery/dbt workflows, data reconciliation, late-arriving updates, historical reprocessing, and downstream reporting datasets.",
    "ownership": "Work directly from business and reporting requirements: clarify the question behind each report, identify required metrics and data sources, design the data flow and reporting model, implement the pipeline, validate the output, and investigate production discrepancies.",
    "tags": [
      "Python",
      "SQL",
      "Airflow",
      "dbt",
      "BigQuery",
      "GCS",
      "REST API",
      "Docker"
    ]
  },
  {
    "title": "Data Engineer",
    "context": "L'INNO · Remote / Part-time",
    "date": "Mar 2025 – Aug 2026",
    "body": "Built and maintained donation and payment reporting workflows across PayPal and GiveCloud, covering REST API ingestion, cloud storage, BigQuery loading, dimensional modeling, reporting datasets, monitoring, failed-load investigation, and historical backfills.",
    "ownership": "Worked with a Data Analyst to clarify reporting questions, business conditions, matching rules, and expected outputs before translating them into ingestion, transformation, validation, and reporting logic.",
    "tags": [
      "Python",
      "REST API",
      "GCS",
      "BigQuery",
      "GitHub Actions",
      "Looker Studio"
    ]
  },
  {
    "title": "Data Engineer",
    "context": "Savvycom · Full-time",
    "date": "Sep 2025 – Apr 2026",
    "body": "Worked on internal analytics and BI workflows across Timesheet, CRM, ERP, and accounting data, including source discovery, source-to-target mapping, dbt transformation, Airflow orchestration, validation, and reporting-ready models.",
    "ownership": "Led day-to-day Data Engineering execution within the project team while receiving technical and architecture guidance from a Senior Engineer / Solution Architect.",
    "tags": [
      "Python",
      "SQL",
      "Airflow",
      "dbt",
      "PostgreSQL",
      "MariaDB",
      "Power BI"
    ]
  }
];

export const focusAreas = [
  {
    "title": "Data Work",
    "description": "I enjoy the part of Data Engineering where unclear business questions become concrete data requirements, pipelines, models, validation rules, and reporting datasets that people can actually trust."
  },
  {
    "title": "Systems Thinking",
    "description": "I pay attention to retries, idempotent processing, late-arriving data, backfills, reconciliation, validation, and the operational details that determine whether a pipeline remains correct after it reaches production."
  },
  {
    "title": "Technical Notes",
    "description": "I use this site to document project context, architecture decisions, data flows, trade-offs, failures, and lessons that may be useful to another engineer."
  },
  {
    "title": "Direction",
    "description": "I am continuing to deepen my Data Engineering fundamentals while expanding into distributed processing, Databricks, Delta Lake, and modern lakehouse systems."
  }
];

export const nowItems = [
  {
    "title": "Current Work",
    "description": "Building and operating production analytics workflows around advertising cost, revenue, near-real-time reporting, reconciliation, and reporting marts."
  },
  {
    "title": "Learning",
    "description": "Deepening distributed Data Engineering concepts through Databricks, Delta Lake, Spark, lakehouse architecture, and production-oriented system design."
  },
  {
    "title": "Writing Down",
    "description": "Documenting project context, architecture decisions, failure handling, data correctness patterns, and the reasoning behind production Data Engineering work."
  }
];

export const projects = [
  {
    "title": "Near-real-time Campaign ROAS",
    "status": "Yuta Labs / Production System",
    "role": "Data Engineer — End-to-end Data Engineering ownership",
    "type": "PRODUCTION",
    "problem": "Built and operated a multi-source advertising analytics workflow combining campaign cost and attributed revenue for near-real-time ROAS reporting.",
    "ownership": "Worked from reporting requirements through production delivery: clarified the business question, identified required metrics and sources, designed the data flow, implemented ingestion and transformation logic, built reporting datasets, validated results, and investigated production discrepancies.",
    "decisions": "Combined advertising cost data from Google, Meta, TikTok, and Unity with Adjust revenue. Used callback ingestion for fresher revenue data while retaining file-based ingestion as a reconciliation baseline, and reused shared cost datasets across downstream reporting workflows.",
    "reliability": "Handled retries, duplicate events, late-arriving data, historical reprocessing, callback/file reconciliation, and production workflow failures. The callback path supported approximately 15-minute reporting freshness.",
    "tags": [
      "Python",
      "SQL",
      "Airflow",
      "BigQuery",
      "dbt",
      "GCS",
      "SQLite",
      "REST API",
      "Docker"
    ]
  },
  {
    "title": "Analytics Platform Ownership & Redesign",
    "status": "Yuta Labs / Production Platform",
    "role": "Data Engineer — Sole Data Engineering owner for the current scope",
    "type": "PRODUCTION",
    "problem": "Took ownership of an inherited analytics platform, reconstructed its data flows and reporting contracts, maintained existing production workflows, and incrementally redesigned parts that needed better reliability and maintainability.",
    "ownership": "Reconstructed how source systems, Airflow workflows, BigQuery datasets, dbt models, and downstream reports connected; handled production maintenance while designing and implementing new reporting and ingestion requirements.",
    "decisions": "Designed hourly GA4 advertising-event reporting with a seven-day reprocessing window and keyed BigQuery MERGE logic, integrated additional advertising cost sources, and planned shared Python/cloud components to reduce repeated implementation across workflows.",
    "reliability": "Used historical reprocessing, reconciliation, keyed merges, validation by reporting dimensions, retry handling, and production issue investigation to keep reporting datasets recoverable and repeatable.",
    "tags": [
      "Python",
      "SQL",
      "Airflow",
      "BigQuery",
      "dbt",
      "GCS",
      "GA4",
      "REST API",
      "Docker"
    ]
  },
  {
    "title": "Blue Dragon Reporting Platform",
    "status": "L'INNO / Remote / Client Project",
    "role": "Data Engineer",
    "type": "CLIENT PROJECT",
    "problem": "Extended a donation and transaction reporting platform by integrating PayPal data from four regional REST APIs with existing GiveCloud donation data.",
    "ownership": "Worked with a Data Analyst to clarify reporting requirements, matching rules, refund handling, late updates, and expected reporting outputs. Owned the PayPal integration from ingestion through modeling, validation, scheduling, backfills, and reporting datasets.",
    "decisions": "Designed Python collectors for PayPal APIs in Vietnam, US, UK, and Australia; preserved raw responses in Google Cloud Storage; loaded structured datasets into BigQuery; and modeled transaction and donor data for downstream reporting.",
    "reliability": "Handled duplicate transactions, refunds, late-arriving updates, failed workflow runs, historical backfills, and reconciliation between PayPal and GiveCloud records.",
    "tags": [
      "Python",
      "REST API",
      "GCS",
      "BigQuery",
      "GitHub Actions",
      "Looker Studio",
      "Salesforce"
    ]
  },
  {
    "title": "Internal Analytics Data Pipeline",
    "status": "Savvycom / Internal Project",
    "role": "Data Engineer / Team Lead for day-to-day execution",
    "type": "INTERNAL PROJECT",
    "problem": "Built an internal analytics pipeline foundation across Timesheet, CRM, and ERP sources, turning large operational database schemas into reporting-ready data models.",
    "ownership": "Led day-to-day Data Engineering execution within the project team, working with stakeholders and receiving architecture/technical guidance from senior engineers and a Solution Architect.",
    "decisions": "Analyzed 1,600+ PostgreSQL and MariaDB source tables to identify reporting entities and exclude metadata/system tables, documented source-to-target mappings, developed dbt models, and orchestrated daily ingestion, transformation, and validation with Airflow.",
    "reliability": "Monitored Airflow DAG/task status, investigated failures, validated transformation outputs, and checked data quality before downstream reporting use.",
    "tags": [
      "Python",
      "SQL",
      "Airflow",
      "dbt",
      "PostgreSQL",
      "MariaDB"
    ]
  },
  {
    "title": "Accounting BI Dashboard",
    "status": "Savvycom / Internal Project",
    "role": "Data Engineer",
    "type": "INTERNAL PROJECT",
    "problem": "Prepared and modeled accounting data for an internal financial reporting dashboard used for expense tracking and operational monitoring.",
    "ownership": "Worked across data preparation, transformation, reporting model design, and dashboard delivery for the assigned accounting BI scope.",
    "decisions": "Connected OneDrive-based files, cleaned and standardized Excel data with Power Query, normalized fields and data types, and designed the reporting model used by Power BI.",
    "reliability": "Checked source refreshes, transformation errors, missing values, data types, aggregate values, and reporting outputs against accounting source data.",
    "tags": [
      "Power BI",
      "Power Query",
      "Excel",
      "OneDrive",
      "Data Modeling"
    ]
  },
  {
    "title": "Financial Market Data Collection & ELT Pipeline",
    "status": "Personal Project",
    "role": "Data Engineer",
    "type": "PERSONAL PROJECT",
    "problem": "Built an end-to-end financial market data pipeline to practice API ingestion, distributed processing, validation, orchestration, and dimensional modeling.",
    "ownership": "Designed and implemented the complete project independently, including API collectors, infrastructure setup, validation, Spark processing, warehouse modeling, and Airflow orchestration.",
    "decisions": "Collected financial datasets from sources such as Polygon, Alpha Vantage, and SEC APIs, processed data with Hadoop/Spark/PySpark, and modeled analytics-ready datasets in a DuckDB dimensional warehouse.",
    "reliability": "Added checks for missing values, duplicates, API failures, schema consistency, and workflow execution; supported repeatable historical processing through Airflow.",
    "tags": [
      "Python",
      "REST API",
      "Hadoop",
      "HDFS",
      "YARN",
      "Spark",
      "PySpark",
      "DuckDB",
      "Airflow",
      "GCE"
    ]
  },
  {
    "title": "Student Performance Prediction Pipeline",
    "status": "HUST / iBME Lab / Research Project",
    "role": "Data / ML Engineer",
    "type": "RESEARCH PROJECT",
    "problem": "Built a data processing and machine-learning pipeline for predicting student academic performance using approximately one million anonymized student records.",
    "ownership": "Worked across data cleaning, exploratory analysis, feature engineering, train/test preparation, model comparison, evaluation, model persistence, and a Streamlit inference interface.",
    "decisions": "Cleaned and normalized large academic datasets, engineered model features, compared machine-learning approaches, persisted the selected model, and exposed inference through Streamlit.",
    "reliability": "Tracked training/evaluation outputs, validated input data, checked data types and feature consistency, and avoided publishing sensitive student information or unsupported model metrics.",
    "tags": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "Joblib",
      "Streamlit"
    ]
  }
];

export const skillGroups = [
  {
    "title": "Production Core",
    "skills": [
      "Python",
      "SQL",
      "Airflow",
      "dbt",
      "BigQuery",
      "Google Cloud Storage",
      "REST API Ingestion",
      "Callback Ingestion",
      "File Ingestion"
    ]
  },
  {
    "title": "Data Engineering",
    "skills": [
      "ETL / ELT",
      "Incremental Processing",
      "Late-arriving Data",
      "Deduplication",
      "Reconciliation",
      "Backfill",
      "Data Validation",
      "Monitoring",
      "Dimensional Modeling"
    ]
  },
  {
    "title": "Databases",
    "skills": [
      "PostgreSQL",
      "MariaDB",
      "SQLite",
      "DuckDB"
    ]
  },
  {
    "title": "Engineering",
    "skills": [
      "Docker",
      "Git",
      "GitHub Actions",
      "Pandas"
    ]
  },
  {
    "title": "BI / Reporting",
    "skills": [
      "Looker Studio",
      "Power BI",
      "Metabase",
      "Power Query"
    ]
  },
  {
    "title": "Project / Research Experience",
    "skills": [
      "Spark",
      "PySpark",
      "Hadoop",
      "HDFS",
      "YARN",
      "Scikit-learn",
      "XGBoost",
      "Streamlit"
    ]
  },
  {
    "title": "Currently Learning",
    "skills": [
      "Databricks",
      "Delta Lake",
      "Lakehouse Architecture",
      "Distributed Data Processing"
    ]
  }
];
