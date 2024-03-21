describe("영화 목록 E2E 테스트", () => {
  beforeEach(() => {
    const POPULAR_REQUEST_URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=*";

    cy.intercept(
      {
        method: "GET",
        url: POPULAR_REQUEST_URL,
      },
      { fixture: "popular-movies.json" }
    ).as("getPopularMovies");

    const SEARCH_REQUEST_URL = "https://api.themoviedb.org/3/search/movie?query=*&include_adult=false&language=ko-KR&page=*";

    cy.intercept(
      {
        method: "GET",
        url: SEARCH_REQUEST_URL,
      },
      { fixture: "search-movies.json" }
    ).as("getSearchMovies");

    cy.visit("http://localhost:8080");
  });

  it("처음 방문할 경우 20개의 데이터를 요청하고, 20개의 영화 데이터가 보여진다", () => {
    const EXPECTED_MOVIE_LENGTH = 20;

    cy.wait("@getPopularMovies").then((interception) => {
      if (interception.response) {
        const initialMovies = interception.response.body.results;
        expect(initialMovies.length).to.equal(20);
      }
    });

    cy.get("ul#movie-list-container").children().should("have.length", EXPECTED_MOVIE_LENGTH);
  });

  it("더보기 버튼을 클릭할 경우, 20개의 데이터가 추가된다.", () => {
    const EXPECTED_MOVIE_LENGTH = 40;

    cy.get("button#next-button").click();

    cy.wait("@getPopularMovies").then((interception) => {
      if (interception.response) {
        const initialMovies = interception.response.body.results;
        expect(initialMovies.length).to.equal(20);
      }
    });

    cy.get("ul#movie-list-container").children().should("have.length", EXPECTED_MOVIE_LENGTH);
  });

  it("10 페이지의 데이터를 모두 보여준 후, 더보기 버튼은 사라져야한다", () => {
    const MOVIE_LENGTH_PER_RESQUEST = 20;
    const TOTAL_PAGE = 10;

    Array.from({ length: 9 }, () => {
      cy.get("button#next-button").click();
    });

    cy.get("ul#movie-list-container")
      .children()
      .should("have.length", MOVIE_LENGTH_PER_RESQUEST * TOTAL_PAGE);

    cy.get("button#next-button").should("not.exist");
  });

  it("검색창에 특정 기워드 검색 시, 검색 키워드에 맞는 데이터가 보여진다.", () => {
    const EXPECTED_MOVIE_LENGTH = 20;

    cy.wait("@getPopularMovies").then(() => {
      cy.get("input#search-input").type("해리");
      cy.get("button#search-button").click();

      cy.wait("@getSearchMovies").then((interception) => {
        if (interception.response) {
          const initialMovies = interception.response.body.results;
          expect(initialMovies.length).to.equal(EXPECTED_MOVIE_LENGTH);
        }
      });
    });

    cy.get("ul#movie-list-container").children().should("have.length", EXPECTED_MOVIE_LENGTH);
    cy.get("ul#movie-list-container").children().first().should("contain", "해리");
  });

  it("검색 후 영화가 존재하지 않을 경우, 검색 결과 없음 UI가 보여진다", () => {
    cy.wait("@getPopularMovies").then(() => {
      cy.get("input#search-input").type("blahblahblah");
      cy.get("button#search-button").click();

      cy.wait("@getSearchMovies").then((interception) => {
        if (interception.response) {
          cy.get(".empty-result").should("exist");
        }
      });
    });
  });
});
