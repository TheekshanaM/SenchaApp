namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CratepersonnelModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Personnels",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        name = c.String(),
                        email = c.String(),
                        phone = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Personnels");
        }
    }
}
