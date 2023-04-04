import styled from 'styled-components';
import { InnerBox, OuterBox } from '../Styles/BaseStyles';


function FrontPageView(){
    return <OuterBox>This is the main container.

            <InnerBox>
                <div>Objects placed inside these inner containers will be put on a row.</div>
                <div>Like this.</div>
            </InnerBox>

            <InnerBox>
                <div>However, objects placed inside the main container will be put in a column.</div>
            </InnerBox>

           </OuterBox>
}

export default FrontPageView;