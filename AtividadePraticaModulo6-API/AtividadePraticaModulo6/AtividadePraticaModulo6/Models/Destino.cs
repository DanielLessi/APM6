using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APM6.Models
{
    [Table("Destinos")]
    public class Destino
    {
        [Key]
        public int Id { get; set; }
        [Display(Name = "Nome")]
        [Required(ErrorMessage = "Informe o nome do destino")]
        [StringLength(50)]
        public string Nome { get; set; }
        [Display(Name = "Preco")]
        [Required(ErrorMessage = "Informe o preço da viagem ao destino")]
        public int Preco { get; set; }
        [Display(Name = "Promocao")]
        [Required(ErrorMessage = "O Destino está em promoção")]
        public bool Promocao { get; set; }
        [Display(Name = "Desconto%")]
        [Required(ErrorMessage = "Se está em promoção, qual a porcentagem do desconto?")]
        public int descontoPor { get; set; }
    }
}