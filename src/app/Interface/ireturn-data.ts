export interface IreturnData {
  'success': string;
  'message': string;
  'status': number;
  'error': IerrData;
}

export interface IerrData {
  'name': [string];
  'message': [string];
  'email': [string];
}
