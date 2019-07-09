import React from 'react';
import Calendar from 'react-calendar';

class CorpCalendar extends React.Component {
    state = {
        date: new Date(),
      }
    onChange = date => this.setState({ date })
    render() { 
        return ( 
            <div className="CorpSection">
                <div className="Corporate">
                    <h3 className="InfoTitle">営業日カレンダー</h3>                    
                    <div className="corpCalendars">
                        <div className="corpCalendar corpInfos">
                            <Calendar
                                locale="ja-JP"
                                onChange={this.onChange}
                                value={this.state.date}
                            />
                        </div>
                        <div className="corpCalendar corpInfos">
                            <Calendar
                                locale="ja-JP"
                                value={this.state.month}
                            />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CorpCalendar;