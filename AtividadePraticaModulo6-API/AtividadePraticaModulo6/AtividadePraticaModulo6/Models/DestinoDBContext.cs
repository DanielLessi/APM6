using Microsoft.EntityFrameworkCore;

namespace APM6.Models
{
    public class DestinoDBContext : DbContext
    {
        public DestinoDBContext(DbContextOptions<DestinoDBContext> options)
          : base(options)
        { }


        public DbSet<Destino> Destinos { get; set; }
        //Mais tabelas colocar aqui

    }
}