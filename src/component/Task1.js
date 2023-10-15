import react from 'react'



const textStyle={
    width:465,
    marginLeft:17,
    height:150,
};
export const Header =(props) =>{
    return(
        <div style=
        {
            {width:520,height:320,
            alignContent:"center",
            marginLeft:450,
            marginTop:175
        }} className="shadow p-3 mb-5 bg-white rounded">
            <h1 style={{fontSize:35,textAlign:"center",marginTop:-10}}>Responsive Paragraph Word<br/>&emsp;Counter</h1>
            <textarea onInput={count} id="i1" style={textStyle} placeholder='Enter Your text here'></textarea><br/><br/>
            <table>
                <tr>
                    <td><h5>Word Count :</h5></td>
                    <td><h5 id="i2"></h5></td>
                </tr>
            </table>
        </div>
    )
}
const count=()=>{
    var v=document.getElementById("i1").value;
    var c=0;
    for(let i=0;i<v.length;i++)
    {
        if(v[i]==" ")
        {
            c++;
        }
        
    }
    if(v.length==0)
    {
        document.getElementById("i2").innerHTML=0;
    }
    else
    {
        document.getElementById("i2").innerHTML=c+1;
    }
}