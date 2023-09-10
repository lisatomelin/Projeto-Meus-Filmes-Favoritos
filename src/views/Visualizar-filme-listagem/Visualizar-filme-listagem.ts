import { API_KEY } from "../../../secrets";
import { v4 as uuidv4 } from 'uuid';
import "bootstrap";
import { ListagemFilme } from "../../models/listagemFilme";
import "./Visualizar-filme-listagem.css";
import { FilmeService } from "../../services/filmes.service";

console.log(uuidv4());

export class VisualizarListagemFilmes {
  FilmeService: FilmeService;
  pnlPrincipal: HTMLDivElement;

  constructor() {
    this.FilmeService = new FilmeService();
    this.registrarElementos();
    this.FilmeService.selecionarFilmePorPopularidade()
    .then(filmes => this.exibirFilmesPorPopularidade(filmes));
    this.FilmeService.selecionarFilmeLancamento()
    .then(filmes => this.exibirFilmesLancamentos(filmes));
    this.FilmeService.selecionarFilmeEmBreve()
    .then(filmes => this.exibirFilmesEmBreve(filmes));
  }

  registrarElementos(){
    this.pnlPrincipal = document.getElementById("pnlPrincipal") as HTMLDivElement;
  }


  private exibirFilmesPorPopularidade(filmes: ListagemFilme[]): void{
    const lblTitulo = document.createElement("h2");
    lblTitulo.textContent = "Filmes Em Alta";
    lblTitulo.classList.add("fs-1", "text-warning");

    const linhaCards = document.createElement("div");
    linhaCards.classList.add("row", "g-3");

    linhaCards.appendChild(lblTitulo);

    for(let filme of filmes){
      const coluna = document.createElement("div");

      coluna.classList.add(
        "app-coluna-poster",
        "col-6",
        "col-md-4",
        "col-lg-2"
        );

        coluna.classList.add("text-center");

        coluna.addEventListener("click", () => {
          window.location.href = filme.urlDetalhes;
        });

        const card = document.createElement("div");
        card.classList.add("d-grid", "gap-2");

        const imgFilme = document.createElement("img");
        imgFilme.classList.add("img-fluid", "rounded-3");
        imgFilme.src = filme.urlPoster;

        const lblTituloFilme = document.createElement("a");
        lblTituloFilme.classList.add(
          "fs-5",
          "link-warning",
          "text-decoration-none"
        );
        lblTituloFilme.textContent = filme.titulo;
        lblTituloFilme.href = filme.urlDetalhes;

        card.appendChild(imgFilme);
        card.appendChild(lblTituloFilme);
        coluna.appendChild(card);
        linhaCards.appendChild(coluna);
    }

    this.pnlPrincipal.appendChild(linhaCards);
  }

  private exibirFilmesLancamentos(filmes: ListagemFilme[]): void{
    const lblTitulo = document.createElement("h2");
    lblTitulo.textContent = "Lançamentos";
    lblTitulo.classList.add("fs-1", "text-warning");

    const linhaCards = document.createElement("div");
    linhaCards.classList.add("row", "g-3");

    linhaCards.appendChild(lblTitulo);

    for(let filme of filmes){
      const coluna = document.createElement("div");

      coluna.classList.add(
        "app-coluna-poster",
        "col-6",
        "col-md-4",
        "col-lg-2"
        );

        coluna.classList.add("text-center");

        coluna.addEventListener("click", () => {
          window.location.href = filme.urlDetalhes;
        });

        const card = document.createElement("div");
        card.classList.add("d-grid", "gap-2");

        const imgFilme = document.createElement("img");
        imgFilme.classList.add("img-fluid", "rounded-3");
        imgFilme.src = filme.urlPoster;

        const lblTituloFilme = document.createElement("a");
        lblTituloFilme.classList.add(
          "fs-5",
          "link-warning",
          "text-decoration-none"
        );
        lblTituloFilme.textContent = filme.titulo;
        lblTituloFilme.href = filme.urlDetalhes;

        card.appendChild(imgFilme);
        card.appendChild(lblTituloFilme);
        coluna.appendChild(card);
        linhaCards.appendChild(coluna);
    }

    this.pnlPrincipal.appendChild(linhaCards);
  }

  private exibirFilmesEmBreve(filmes: ListagemFilme[]): void{
    const lblTitulo = document.createElement("h2");
    lblTitulo.textContent = "Em Breve";
    lblTitulo.classList.add("fs-1", "text-warning");

    const linhaCards = document.createElement("div");
    linhaCards.classList.add("row", "g-3");

    linhaCards.appendChild(lblTitulo);

    for(let filme of filmes){
      const coluna = document.createElement("div");

      coluna.classList.add(
        "app-coluna-poster",
        "col-6",
        "col-md-4",
        "col-lg-2"
        );

        coluna.classList.add("text-center");

        coluna.addEventListener("click", () => {
          window.location.href = filme.urlDetalhes;
        });

        const card = document.createElement("div");
        card.classList.add("d-grid", "gap-2");

        const imgFilme = document.createElement("img");
        imgFilme.classList.add("img-fluid", "rounded-3");
        imgFilme.src = filme.urlPoster;

        const lblTituloFilme = document.createElement("a");
        lblTituloFilme.classList.add(
          "fs-5",
          "link-warning",
          "text-decoration-none"
        );
        lblTituloFilme.textContent = filme.titulo;
        lblTituloFilme.href = filme.urlDetalhes;

        card.appendChild(imgFilme);
        card.appendChild(lblTituloFilme);
        coluna.appendChild(card);
        linhaCards.appendChild(coluna);
    }

    this.pnlPrincipal.appendChild(linhaCards);
  }
}


window.addEventListener('load', () => new VisualizarListagemFilmes());