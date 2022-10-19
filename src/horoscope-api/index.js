// import axios from 'axios';

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aries&day=today',
    success:function(data){
    console.log(data);
    }
});


// {$.ajax({
//     type:'POST',
//     url:'https://aztro.sameerkumar.website?sign=aries&day=today',
//     success:function(data){
//     $('#ariesDaily').append(data.description)
//     console.log(data)
//     }
//      });

    
// }


