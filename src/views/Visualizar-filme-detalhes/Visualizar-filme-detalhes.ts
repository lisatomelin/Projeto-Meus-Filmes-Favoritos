
import "./Visualizar-filme-detalhes.css";
import { FilmeService } from "../../services/filmes.service";
import { DetalhesFilme } from "../../models/detalhesFilme";
import { TrailerFilme } from "../../models/trailerFilme";

export class VisualizarDetalhesFilme {
  titulo: HTMLParagraphElement;
  votos: HTMLParagraphElement;
  dataLancamento: HTMLDataElement;
  imagemFilme: HTMLImageElement;
  trailer: HTMLIFrameElement;
  texto: HTMLParagraphElement;
  FilmeService: FilmeService;
  generos: HTMLDivElement;
  creditos: HTMLDivElement;
  btnFavoritos: HTMLImageElement;
  filmesFavoritos: number[];
  idSelecionado: number;

  constructor() {
    this.registrarElementos();
    this.registrarEventos();

    const params = new URLSearchParams(window.location.search);
    this.idSelecionado = Number.parseInt(params.get("id") as string);

    this.FilmeService = new FilmeService();
    this.FilmeService.selecionarDetalhesFilmePorId(this.idSelecionado).then(
      (f) => this.substituirElementos(f)
    );
    this.FilmeService.selecionarTrailersFilmePorId(this.idSelecionado).then(
      (t) => this.substituirTrailer(t)
    );

    this.FilmeService.selecionarTrailersFilmePorId(this.idSelecionado).then(
      (t) => this.substituirTrailer(t)
    );
  }

  registrarEventos(){
    this.btnFavoritos.addEventListener('click', () => this.adicionarOuRemoverFavoritos());
  }

  registrarElementos() {
    this.titulo = document.getElementById("titulo") as HTMLParagraphElement;
    this.votos = document.getElementById("votos") as HTMLParagraphElement;
    this.dataLancamento = document.getElementById(
      "dataLancamento"
    ) as HTMLDataElement;
    this.imagemFilme = document.getElementById("img") as HTMLImageElement;
    this.trailer = document.getElementById(
      "iframeTrailer"
    ) as HTMLIFrameElement;
    this.texto = document.getElementById("texto") as HTMLParagraphElement;
    this.generos = document.getElementById("generos") as HTMLDivElement;
    this.creditos = document.getElementById("creditos") as HTMLDivElement;
    this.btnFavoritos = document.getElementById("btnFavoritos") as HTMLImageElement;
  }

  private adicionarOuRemoverFavoritos(){
    this.btnFavoritos.classList.remove("bi", "bi-suit-heart", "fs-2", "text-danger");
    this.btnFavoritos.classList.add("bi", "bi-suit-heart-fill", "fs-2", "text-danger");
  }

  private substituirTrailer(trailer: TrailerFilme): void {
    this.trailer.src = trailer.sourceUrl;
  }

  private substituirElementos(filme: DetalhesFilme): void {
    this.titulo.textContent = filme.titulo;
    this.votos.textContent = filme.contagemVotos + " Votos";
    this.dataLancamento.textContent = filme.dataLancamento;
    this.imagemFilme.src = filme.urlPoster;
    this.texto.textContent = filme.sinopse;


    filme.generos.forEach((genero) => {
      const badge = document.createElement("span");
      badge.className = "badge rounded-pill fs-5 px-4 py-2 bg-danger text-dark";
      badge.textContent = genero;
      this.generos.appendChild(badge);
    });
  }
}

window.addEventListener("load", () => new VisualizarDetalhesFilme());