import {Component, OnInit, forwardRef} from '@angular/core';
import {WizardStepComponent} from "../../../wizard/wizard-step/wizard-step.component";
import {WizardActions} from "../../../wizard/wizard.actions";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../../../store/root.types";
import {Observable} from "rxjs/Observable";
import {LeaderboardService} from "../../../services/leaderboard.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'leaderboard-step',
  templateUrl: 'leaderboard-step.component.html',
  styleUrls: ['leaderboard-step.component.scss'],
  providers: [{provide: WizardStepComponent, useExisting: forwardRef(() => LeaderboardStepComponent) }]

})
export class LeaderboardStepComponent extends WizardStepComponent implements OnInit {

  constructor(store: NgRedux<IAppState>, wizardActions:WizardActions, private _leaderboardService: LeaderboardService) {
    super(store, wizardActions);
    this.options = {
      chart: {
        type: 'column',
        backgroundColor: '#F0EFED',
        spacingBottom: 10,
        spacingTop: 10,
      },
      credits: {
        enabled: false
      },
      title: {text: ''},
      series: [{
        color: '#13727d',
        data: (function(){
          this.get();
        }),
        groupPadding: 0,
        maxPointWidth: 90,
        pointPadding: 0.05,
        showInLegend: false,
      }],

      xAxis: [{
        className: 'chart-labels',
        categories: ['< 4', '4 - 6', '7 - 9', '10 - 12', '> 12'],
        lineColor: '#50433d',
        lineWidth: 1,
        tickColor: '#50433d',
        tickLength: 3,
        tickPosition: 'inside',
        title: {
          margin: 20,
          text: 'Points Scored'
        }
      }],
      yAxis: [{
        className: 'chart-labels',
        gridLineColor: '#F0EFED',
        lineColor: '#50433d',
        lineWidth: 1,
        minorTickInterval: 10,
        minorTickLength: 6,
        minorTickWidth: 1,
        min: 0,
        max: 100,
        tickInterval: 10,
        title: {
          margin: 40,
          text: '% of HCPs completing quiz'
        }
      }],
      tooltip: {
        enabled: false
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 439
          },
          // Make the labels less space demanding on mobile
          chartOptions: {
            chart: {
              height: 200,
              spacingLeft: 0
            },
            series: {
              maxPointWidth: 35,
            },
            xAxis: {
              title: {
                margin: 10,
              }
            },
            yAxis: {
              title: {
                margin: 5
              }
            }
          }
        }, {
            condition: {
              minWidth: 440,
              maxWidth: 727
            },
            chartOptions: {
              chart: {
                height: 300,
                spacingLeft: 15
              },
              series: {
                maxPointWidth: 45,
              },
              xAxis: {
                title: {
                  margin: 20,
                }
              },
              yAxis: {
                title: {
                  margin: 25
                }
              }
            }
          }, {
            condition: {
              minWidth: 728
            },
            chartOptions: {
              chart: {
                height: 400
              },
              series: {
                maxPointWidth: 90,
              },
              yAxis: {
                title: {
                  margin: 50
                }
              }
            }
          }]
      }
    };
  }

  public options: Object;
  public score: number;

  ngOnInit() {
    this._store.select(['quiz','score']).subscribe((val) => {
      this.score = Number(val);
    });
  }

  chart: any;
  loadChart(chart) {
    this.chart = chart;
    this._leaderboardService.get().then((result) => {

      let leaderboard = {};

      leaderboard[environment.api.attribute.bandA] = 0;
      leaderboard[environment.api.attribute.bandB] = 0;
      leaderboard[environment.api.attribute.bandC] = 0;
      leaderboard[environment.api.attribute.bandD] = 0;
      leaderboard[environment.api.attribute.bandE] = 0;

      for (let band of result.Categories) {
        let bandId, value;

        for(let attribute of band.AttributeList)
        {
          if(attribute.ID === environment.api.attribute.id.key)
          {
            bandId = attribute.Value.toUpperCase();
          }
          else if(attribute.ID === environment.api.attribute.score.key)
          {
            value = attribute.Value;
          }
        }
        if(bandId) {
          leaderboard[bandId] = Number(value);
        }
      }
      this.updateLeaderboard(leaderboard).then((r)=>{
        this.chart.series[0].setData(this.getData(leaderboard));
      });
    }).catch((err)=>{
      console.error(err);
    });
  }

  private updateLeaderboard(leaderboard) {
    let band;
    if (this.score < 4) {
      band = environment.api.attribute.bandA;
    } else if (this.score <= 6 ) {
      band = environment.api.attribute.bandB;
    } else if (this.score <= 9) {
      band = environment.api.attribute.bandC;
    } else if (this.score <= 12) {
      band = environment.api.attribute.bandD;
    } else {
      band = environment.api.attribute.bandE;
    }

    leaderboard[band] ++;
    return this._leaderboardService.updateBand(band,leaderboard[band]);
  }


  public getData(leaderboard){

    let v1: number = leaderboard[environment.api.attribute.bandA];
    let v2: number = leaderboard[environment.api.attribute.bandB];
    let v3: number = leaderboard[environment.api.attribute.bandC];
    let v4: number = leaderboard[environment.api.attribute.bandD];
    let v5: number = leaderboard[environment.api.attribute.bandE];
    let total: number = v1 + v2 + v3 + v4 + v5;

    return [((v1 / total) * 100), ((v2 / total) * 100), ((v3 / total) * 100), ((v4 / total) * 100),((v5 / total) * 100)];
  }
}
