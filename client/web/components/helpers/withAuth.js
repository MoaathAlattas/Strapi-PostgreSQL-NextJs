import {current} from '../../utils/auth'
import Router from "next/router"

const withAuth = (Page) =>{

      function Component(props){
            return (<Page {...props} />)
      }

      Component.getInitialProps = async (ctx)=>{
            const {res,pathname} = ctx
            let prevProps = {}

            const user = await current(ctx)
            
            if(!user.id){

                  if(typeof window === 'undefined') {
                        res.writeHead(301,{Location: `/login?redirect=${pathname}`})
                        res.end()
                  } else {
                        Router.push(`/login?redirect=${pathname}`)
                  }
            }
            
            if(Page.getInitialProps){
                  prevProps = await Page.getInitialProps(ctx)
            }
            
            return {...prevProps, user} 
            
      }
      

      return Component
}

export default withAuth