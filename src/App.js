import './App.css';
import Card from './Card';

function App(){
 let plans = [{
    plan: "FREE",
    price: 0,
    user: "Single User",
    storage:"50GB Storage",
    projectPublic:"Unlimited Public Projects",
    access:"Community Access",
    projectPrivate:"Unlimited Private Projects",
    projectEnabler: false,
    support:"Dedicated Phone Support",
    supportEnabler: false,
    subdomain:"Free Subdomain",
    subdomainEnabler: false,
    report:"Monthly Status Reports",
    reportEnabler: false
 },
 {
    plan: "Plus",
    price: 9,
    user: "5 Users",
    storage:"50GB Storage",
    projectPublic:"Unlimited Public Projects",
    access:"Community Access",
    projectPrivate:"Unlimited Private Projects",
    projectEnabler: true,
    support:"Dedicated Phone Support",
    supportEnabler: true,
    subdomain:"Free Subdomain",
    subdomainEnabler: true,
    report:"Monthly Status Reports",
    reportEnabler: false
},
{
    plan: "PRO",
    price: 49,
    user: "Unlimited Users",
    storage:"50GB Storage",
    projectPublic:"Unlimited Public Projects",
    access:"Community Access",
    projectPrivate:"Unlimited Private Projects",
    projectEnabler: true,
    support:"Dedicated Phone Support",
    supportEnabler: true,
    subdomain:"Free Subdomain",
    subdomainEnabler: true,
    report:"Monthly Status Reports",
    reportEnabler: true
}]
 return<>
 <section class="pricing py-5">
       <div class="container">
         <div class="row">
            {
             plans.map((data)=>{
                return <Card detail = {data}></Card>
             })   
            }
         </div>
        </div>
</section>
 </>

}
export default App;