import React from 'react';
import Corporate from './Corp';
import CorpCalendar from './CorpCalendar';

class CorpInfo extends React.Component {
    render() { 
        return ( 
            <div className="container">
                <div className="Corporations">
                    <Corporate />
                    <CorpCalendar />
                </div>
            </div>
         );
    }
}
 
export default CorpInfo;