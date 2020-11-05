export enum QueryFields {
  NAME = 'name',
  FULL_TEXT = 'name',
  CODE = 'alpha',
  CURRENCY = 'currency',
  LANGUAGE = 'lang',
  CAPITAL_CITY = 'capital',
  CALLING_CODE = 'callingcode',
  REGION = 'region',
  REGIONAL_BLOC = 'regionalbloc'
}

export const QUERIES = [
  {name: 'name', value: QueryFields.NAME},
  {name: 'full name', value: QueryFields.FULL_TEXT, fullText: true},
  {name: 'code', value: QueryFields.CODE},
  {name: 'currency', value: QueryFields.CURRENCY},
  {name: 'language', value: QueryFields.LANGUAGE},
  {name: 'capital city', value: QueryFields.CAPITAL_CITY},
  {name: 'calling code', value: QueryFields.CALLING_CODE},
  {name: 'region', value: QueryFields.REGION},
  {name: 'regional bloc', value: QueryFields.REGIONAL_BLOC}
];
