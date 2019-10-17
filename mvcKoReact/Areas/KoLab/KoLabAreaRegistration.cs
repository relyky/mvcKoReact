using System.Web.Mvc;

namespace mvcKoReact.Areas.KoLab
{
    public class KoLabAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "KoLab";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "KoLab_default",
                "KoLab/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}