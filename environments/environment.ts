// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: {
    useMock: true,
    baseUrl:'N/A',
    categoryCode: 'CATAA00059',
    entityCode: 'CSEAA00030',
    entityName: 'AU Band Score 2',
    authToken: 'mAO6lfk4gHX',
    callerId: 'pL7PnVpw5s',
    applicationId: 'WBSAA00369',
    attribute: {
      bandA: 'BAND A',
      bandB: 'BAND B',
      bandC: 'BAND C',
      bandD: 'BAND D',
      bandE: 'BAND E',
      id: {
        key: 'A_BAND_ID',
      },
      score: {
        key: 'A_SCORE'
      }
    }
  }
};
