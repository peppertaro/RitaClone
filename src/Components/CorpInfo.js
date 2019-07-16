import React from 'react';
import Corporate from './Corp';
import CorpCalendar from './CorpCalendar';

class CorpInfo extends React.Component {
    render() { 
        return ( 
            <div className="Corporations">
                <div className="container">
                    <Corporate />
                    <CorpCalendar />
                </div>
            </div>
         );
    }
}
 
export default CorpInfo;