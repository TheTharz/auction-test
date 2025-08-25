import axios from 'axios';

const buildClient = (context) => {
  if(typeof window === 'undefined'){
    return axios.create({
      baseURL: 'http://a162d4d3de7134193b24ea3ca488e4ef-488647785.us-east-2.elb.amazonaws.com/',
      headers: context.req.headers
    })
  }else{
    return axios.create({
      baseURL: '/'
    })
  }
}

export default buildClient;