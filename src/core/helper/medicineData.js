const myData = [
  {
    "name": "Altace",
    "genericName": "ramipril",
    "disease": "Hypertension",
    "price": 560,
    "manufacturer": "PO SUM ON MEDICINE FACTORY LTD.",
    "prescriptionNeeded": true
  },
  {
    "name": "Amaryl",
    "genericName": "glimepiride",
    "disease": "Type 2 Diabetes",
    "price": 25,
    "manufacturer": "GALLIPHARM INC.",
    "prescriptionNeeded": false
  },
  {
    "name": "Ambien",
    "genericName": "zolpidem",
    "disease": "Insomnia",
    "price": 237,
    "manufacturer": "OXYFIL INC.",
    "prescriptionNeeded": true
  },
  {
    "name": "Ativan",
    "genericName": "lorazepam",
    "disease": "Anxiety",
    "price": 848,
    "manufacturer": "KNOLL AG",
    "prescriptionNeeded": true
  },
  {
    "name": "Calan SR",
    "genericName": "verapamil SR",
    "disease": "High Blood Pressure",
    "price": 309,
    "manufacturer": "KRAMER LABORATORIES, INC",
    "prescriptionNeeded": true
  },
  {
    "name": "Cardizem",
    "genericName": "diltiazem ER",
    "disease": "Hypertension",
    "price": 104,
    "manufacturer": "VITAQUEST CORP",
    "prescriptionNeeded": false
  },
  {
    "name": "Celexa",
    "genericName": "citalopram",
    "disease": "Depression",
    "price": 909,
    "manufacturer": "CMI COSMETIC MANUFACTURERS CORP",
    "prescriptionNeeded": false
  },
  {
    "name": "Coumadin",
    "genericName": "warfarin",
    "disease": "Deep Vein Thrombosis",
    "price": 888,
    "manufacturer": "KOOTENAY BORN BOTANICALS",
    "prescriptionNeeded": false
  },
  {
    "name": "Diabeta",
    "genericName": "glyburide",
    "disease": "Diabetes Mellitus Type 2",
    "price": 835,
    "manufacturer": "INTEGA SCIENCES DE LA PEAU / INTEGA SKIN SCIENCES INC",
    "prescriptionNeeded": true
  },
  {
    "name": "Dilantin",
    "genericName": "phenytoin",
    "disease": "Epilepsy",
    "price": 767,
    "manufacturer": "FRESHEN AIR CORPORATION",
    "prescriptionNeeded": true
  },
  {
    "name": "Effexor",
    "genericName": "venlafaxine",
    "disease": "Dpression",
    "price": 34,
    "manufacturer": "SHILAT COSMETICS LTD.",
    "prescriptionNeeded": false
  },
  {
    "name": "Flonase",
    "genericName": "fluticasone",
    "disease": "Rhinitis",
    "price": 489,
    "manufacturer": "SELF HEALTH RESOURCE CENTRE",
    "prescriptionNeeded": false
  },
  {
    "name": "Fosamax",
    "genericName": "alendronate",
    "disease": "O",
    "price": 1000,
    "manufacturer": "SPORT PHARMA USA",
    "prescriptionNeeded": true
  },
  {
    "name": "Glucophage",
    "genericName": "metformin",
    "disease": "Type 2 Diabetes",
    "price": 894,
    "manufacturer": "CHEMLINK LABORATORIES LLC",
    "prescriptionNeeded": false
  },
  {
    "name": "Glucotrol",
    "genericName": "glipizide",
    "disease": "glipizide",
    "price": 725,
    "manufacturer": "OCEAN NUTRITION CANADA LTD.",
    "prescriptionNeeded": false
  },
  {
    "name": "Hytrin",
    "genericName": "terazosin",
    "disease": "Enlarged Prostate",
    "price": 902,
    "manufacturer": "TRW HOLDINGS INC.",
    "prescriptionNeeded": false
  },
  {
    "name": "Imitrex",
    "genericName": "sumatriptan",
    "disease": "Migraine",
    "price": 930,
    "manufacturer": "MICROBAN CANADA INC.",
    "prescriptionNeeded": true
  },
  {
    "name": "Lasix",
    "genericName": "furosemide",
    "disease": "Edema",
    "price": 182,
    "manufacturer": "PHARMACEUTICAL LABORATORY LABOFARM",
    "prescriptionNeeded": true
  },
  {
    "name": "Lopid",
    "genericName": "gemfibrozil",
    "disease": "abnormal blood lipid levels",
    "price": 615,
    "manufacturer": "SYNTEX S.A.",
    "prescriptionNeeded": false
  },
  {
    "name": "Mevacor",
    "genericName": "lovastatin",
    "disease": "cardiovascular disease",
    "price": 697,
    "manufacturer": "FOUNDATION CONSUMER HEALTHCARE, LLC",
    "prescriptionNeeded": true
  },
  {
    "name": "Micronase",
    "genericName": "glyburide",
    "disease": "diabetes mellitus type 2",
    "price": 443,
    "manufacturer": "T & T NUTRITION INC.",
    "prescriptionNeeded": true
  },
  {
    "name": "Norvasc",
    "genericName": "amlodipine",
    "disease": "coronary artery disease",
    "price": 83,
    "manufacturer": "IOVATE HEALTH SCIENCES INTERNATIONAL INC.",
    "prescriptionNeeded": true
  },
  {
    "name": "Paxil",
    "genericName": "paroxetine",
    "disease": "",
    "price": 778,
    "manufacturer": "ALLERGAN PHARMA CO.",
    "prescriptionNeeded": false
  },
  {
    "name": "Pepcid",
    "genericName": "famotidine",
    "disease": " Obsessive-Compulsive disorder",
    "price": 368,
    "manufacturer": "ALEXANDRIA INTERNATIONAL INC.",
    "prescriptionNeeded": true
  },
  {
    "name": "Pravachol",
    "genericName": "pravastatin",
    "disease": "cardiovascular disease",
    "price": 115,
    "manufacturer": "CLINICIAN'S CHOICE DENTAL PRODUCTS",
    "prescriptionNeeded": false
  },
  {
    "name": "Prozac",
    "genericName": "fluoxetine",
    "disease": "premenstrual dysphoric disorder",
    "price": 10,
    "manufacturer": "OMNILIFE MANUFACTURA, S.A. DE C.V.",
    "prescriptionNeeded": false
  },
  {
    "name": "Retin-A",
    "genericName": "tretinoin",
    "disease": "acne and acute promyelocytic leukemia",
    "price": 406,
    "manufacturer": "FORTIUS CANADA INCORPORATED",
    "prescriptionNeeded": true
  },
  {
    "name": "Risperdal",
    "genericName": "risperidone",
    "disease": "schizophrenia and bipolar disorder",
    "price": 721,
    "manufacturer": "DIVERSIFIED CHEMICAL TECHNOLOGIES INC.",
    "prescriptionNeeded": false
  },
  {
    "name": "Sonata",
    "genericName": "zaleplon",
    "disease": "insomnia",
    "price": 625,
    "manufacturer": "TAIGA BIOACTIVES INC.",
    "prescriptionNeeded": true
  },
  {
    "name": "Synthroid",
    "genericName": "levothyroxine",
    "disease": "thyroid hormone deficiency",
    "price": 196,
    "manufacturer": "SILCOL",
    "prescriptionNeeded": false
  },
  {
    "name": "Timoptic",
    "genericName": "timolol",
    "disease": "ocular hypertension and glaucoma",
    "price": 602,
    "manufacturer": "LEIB RESEARCH",
    "prescriptionNeeded": false
  },
  {
    "name": "Ultram",
    "genericName": "tramadol",
    "disease": "pain relief",
    "price": 63,
    "manufacturer": "BARRETT HODGSON PAKISTAN (PVT) LIMITED",
    "prescriptionNeeded": false
  },
  {
    "name": "Ventolin",
    "genericName": "albuterol",
    "disease": "breathing problems",
    "price": 898,
    "manufacturer": "ORALABS INC",
    "prescriptionNeeded": true
  },
  {
    "name": "Wellbutrin",
    "genericName": "bupropion",
    "disease": "major depressive disorder",
    "price": 803,
    "manufacturer": "TERRAPIN OUTDOOR SYSTEMS, INC.",
    "prescriptionNeeded": false
  },
  {
    "name": "Wellbutrin XL",
    "genericName": "bupropion ext-release",
    "disease": "depression",
    "price": 60,
    "manufacturer": "CORETEX PRODUCTS INC.",
    "prescriptionNeeded": true
  },
  {
    "name": "Xanax",
    "genericName": "alprazolam",
    "disease": "anxiety disorders",
    "price": 824,
    "manufacturer": "MABLEW MANAGEMENT LTD.",
    "prescriptionNeeded": false
  },
  {
    "name": "Zantac",
    "genericName": "ranitidine",
    "disease": "ulcers",
    "price": 143,
    "manufacturer": "ESSENTIA HEALTHCARE (CANADA) LIMITED",
    "prescriptionNeeded": false
  },
  {
    "name": "Zocor",
    "genericName": "simvastatin",
    "disease": "heart problems",
    "price": 1000,
    "manufacturer": "PDQ MANUFACTURING",
    "prescriptionNeeded": true
  },
  {
    "name": "Zoloft",
    "genericName": "sertraline",
    "disease": "obsessive compulsive disorder & Post-Traumatic stress disorder",
    "price": 848,
    "manufacturer": "SPRAY NINE CANADA LTD.",
    "prescriptionNeeded": false
  },
  {
    "name": "Zovirax",
    "genericName": "acyclovir",
    "disease": "Virus infections",
    "price": 56,
    "manufacturer": "LOCKERROOM MARKETING LTD",
    "prescriptionNeeded": true
  }
]

export const autoPopulate = () => {
  if (typeof window !== undefined) {
    localStorage.setItem('medicineData', JSON.stringify(myData));
    const msg = "Your data has been uploaded";
    console.log(msg);
    return msg;
  }
}

export const searchData = (term) => {
  if (typeof window !== undefined) {
    const stringData = localStorage.getItem('medicineData');
    if (stringData) {
      const medicineData = JSON.parse(stringData);
      let responseData = [];
      medicineData.forEach(element => {
        try {
          if (element.name.toLowerCase().search(term.toLowerCase()) !== (-1)) {
            responseData.push(element.name);
          }
        }
        catch (e) {
          console.log(e);
          return [];
        }
      });
      return responseData;
    }
    return [];
  }
}

export const getData = (term) => {
  if (typeof window !== undefined) {
    const stringData = localStorage.getItem('medicineData');
    if (stringData) {
      const medicineData = JSON.parse(stringData);
      let responseData = [];
      if (term === '') {
        return medicineData;
      }
      medicineData.forEach(element => {
        try {
          if (element.name.toLowerCase().search(term.toLowerCase()) !== (-1)) {
            responseData.push(element);
          }
        }
        catch (e) {
          return [];
        }
      });
      return responseData;
    }
    return [];
  }
}