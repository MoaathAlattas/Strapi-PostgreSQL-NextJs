import {current} from '../../utils/auth'
import Router from "next/router"

const helper = (Page) =>{

      function Component(props){
            return (<Page {...props} />)
      }

      Component.getInitialProps = async (ctx)=>{
            const {res} = ctx
            let prevProps = {}

            const user = await current(ctx)
            
            if(user){

                  if(typeof window === 'undefined') {
                        res.writeHead(301,{Location: `/`})
                        res.end()
                  } else {
                        Router.push(`/`)
                  }

            }else{

            if(Page.getInitialProps) prevProps = await Page.getInitialProps(ctx);
            }
            
            return {...prevProps, user} 
            
      }
      

      return Component
}

export default helper