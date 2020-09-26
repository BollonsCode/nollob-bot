module.exports = {
  monthNumber(monthName) {
    let monthNumber;
    switch (monthName) {
      case "janeiro" || "Janeiro":
        monthNumber = 1;
        break;
      case "fevereiro" || "Fevereiro":
        monthNumber = 2;
        break;
      case "março" || "marco" || "Março" || "Marco":
        monthNumber = 3;
        break;
      case "abril" || "Abril":
        monthNumber = 4;
        break;
      case "maio" || "Maio":
        monthNumber = 5;
        break;
      case "junho" || "Junho":
        monthNumber = 6;
        break;
      case "julho" || "Julho":
        monthNumber = 7;
        break;
      case "agosto" || "Agosto":
        monthNumber = 8;
        break;
      case "setembro" || "Setembro":
        monthNumber = 9;
        break;
      case "outubro" || "Outubro":
        monthNumber = 10;
        break;
      case "novembro" || "Novembro":
        monthNumber = 11;
        break;
      case "dezembro" || "Dezembro":
        monthNumber = 12;
        break;
      default:
        monthNumber = 0;
        break;
    }

    return monthNumber;
  },
};
