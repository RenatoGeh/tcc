engine = pdflatex
file = slides
compile = $(engine) $(file).tex

all:
	make clean; \
	$(compile); $(compile); \
 	biber $(file); \
 	$(compile); $(compile) && \
 	zathura $(file).pdf

.PHONY: clean
clean:
	rm -f *.aux *.bbl *.bcf *.blg *.log *.out *.run.xml *.toc *.nav *.snm *.synctex.gz-current;
	rm -f *.synctex.gz *_vimtex.* *.fls *.fdb_latexmk;
	rm -rf _minted-report

