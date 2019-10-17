using mvcKoReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcKoReact.Areas.KoLab.Controllers
{
    public class GreetingController : Controller
    {
        // GET: KoLab/Greeting
        public ActionResult Index()
        {
            var model = new UserInfo()
            {
                firstName = "Bert X",
                lastName = "Bertington"
            };
            return View(model);
        }
    }
}