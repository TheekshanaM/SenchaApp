using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Api.Models;
using System.Web.Http.Cors;



namespace Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PersonnelController : ApiController
    {
        private MyDbContext db = new MyDbContext();

        // GET api/Personnel
        [HttpGet]
        //[Route("GetPersonnels")]
        public IEnumerable<Personnel> GetPersonnels()
        {
            
            return db.Personnel.AsEnumerable();
        }

        // GET api/Personnel/5
        public Personnel GetPersonnel(int id)
        {
            Personnel personnel = db.Personnel.Find(id);
            if (personnel == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return personnel;
        }

        // PUT api/Personnel/5
        public HttpResponseMessage PutPersonnel(int id, Personnel personnel)
        {
            if (ModelState.IsValid && id == personnel.id)
            {
                db.Entry(personnel).State = EntityState.Modified;

                try
                {
                    db.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        // POST api/Personnel
        [HttpPost]
        public HttpResponseMessage PostPersonnelUpdate(Personnel personnel)
        {
            /*if (ModelState.IsValid)
            {*/
                db.Personnel.Add(personnel);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, personnel);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = personnel.id }));
                return response;
            /*}
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }*/
        }

        // DELETE api/Personnel/5
        public HttpResponseMessage DeletePersonnel(int id)
        {
            Personnel personnel = db.Personnel.Find(id);
            if (personnel == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Personnel.Remove(personnel);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            return Request.CreateResponse(HttpStatusCode.OK, personnel);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}