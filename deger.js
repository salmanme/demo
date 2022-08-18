var deger;
deger = deger.replace(/[.]/g, "");
	deger = deger.split(",");
	if (deger.length * 1 > 1) {
		if (deger[1].length * 1 > 0) {
			if (deger[1].length * 1 > 2) cell.setValue(deger[0] * 1.0 + deger[1] * 0.001);
			else if (deger[1].length * 1 > 1) cell.setValue(deger[0] * 1.0 + deger[1] * 0.01);
			else cell.setValue(deger[0] * 1.0 + deger[1] * 0.1);
		} else {
			cell.setValue(deger[0] * 1.0);
		}
	} else {
		cell.setValue(deger[0] * 1.0);
	}
