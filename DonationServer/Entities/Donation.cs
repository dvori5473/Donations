using System.ComponentModel.DataAnnotations;

namespace Entities
{
    public class Donation
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "This field is required.")]
        [RegularExpression(@"^[a-zA-Zא-ת\s]+$", ErrorMessage = "Only English and Hebrew characters are allowed.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "This field is required.")]
        [RegularExpression(@"^\d+(\.\d+)?$", ErrorMessage = "Only numeric values are allowed, including decimals.")]
        public float Sum { get; set; }
        [Required(ErrorMessage = "This field is required.")]
        [RegularExpression(@"^[a-zA-Zא-ת\s]+$", ErrorMessage = "Only English and Hebrew characters are allowed.")]
        public string Type { get; set; }
        [Required(ErrorMessage = "This field is required.")]
        [RegularExpression(@"^[a-zA-Zא-ת\s]+$", ErrorMessage = "Only English and Hebrew characters are allowed.")]
        public string Vocation { get; set; }
        [RegularExpression(@"^[a-zA-Zא-ת\s]+$", ErrorMessage = "Only English and Hebrew characters are allowed.")]
        public string Condition { get; set; }
        [Required(ErrorMessage = "This field is required.")]
        [RegularExpression(@"^[a-zA-Zא-ת\s]+$", ErrorMessage = "Only English and Hebrew characters are allowed.")]
        public string typeOfCurrency { get; set; }
        [Required(ErrorMessage = "This field is required.")]
        public float ConversionRate { get; set; }
    }
}
