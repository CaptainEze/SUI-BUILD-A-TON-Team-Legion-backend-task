export interface AppConfig {
  port: number | string;
  jwtSecret: string;
  jwtExpiry: string;  // string for jwt sign expiry option like '1d', '1h'
}