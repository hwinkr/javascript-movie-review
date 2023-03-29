describe('영화 리뷰 어플리케이션을 테스트한다.', () => {
  it('사이트 접속 시에 인기있는 영화 목록이 렌더링 된다.', () => {
    // 인기있는 영화 API intercept
    cy.intercept(
      {
        method: 'GET',
        url: /^https:\/\/api.themoviedb.org\/3\/movie\/popular*/,
      },
      { fixture: 'movie-popular.json' }
    );
    // 사이트 방문
    cy.visit('/');

    // 현재 영화 목록 정보의 타이틀 확인
    cy.get('.movie-list-title').should('have.text', '지금 인기있는 영화');

    // 불러와진 영화 목록 개수 20개인지 확인
    cy.get('.item-list').children().should('have.length', 20);
  });

  it('검색 시에 query를 포함하는 영화 목록이 렌더링 되고, 페이지 바닥에 도달했을 때 해당 query에 해당하는 값들이 렌더링 된다.', () => {
    // query를 가진 영화 API intercept
    cy.intercept(
      {
        method: 'GET',
        url: /^https:\/\/api.themoviedb.org\/3\/search\/movie*/,
      },
      { fixture: 'movie-search.json' }
    );

    // 화면 방문
    cy.visit('/');

    // 검색값 설정
    const query = '원피스';

    // input box에 query 삽입 및 검색
    cy.get('.search-input').type(query);
    cy.get('.search-button').click();

    // query에 대한 영화 목록 타이틀 확인
    cy.get('.movie-list-title').should('have.text', `"${query}" 검색 결과`);

    // 불려와진 데이터에 query가 포함되어 있는지 확인
    cy.get('.item-list')
      .children()
      .each((li) => {
        cy.wrap(li).get('.item-title').should('contain.text', query);
      });

    cy.intercept(
      {
        method: 'GET',
        url: /^https:\/\/api.themoviedb.org\/3\/search\/movie*/,
      },
      { fixture: 'movie-search-more.json' }
    );

    // 제일 밑으로 이동
    cy.scrollTo('bottom');

    // 불려와진 데이터에 query가 포함되어 있는지 확인
    cy.get('.item-list')
      .children()
      .each((li) => {
        cy.wrap(li).get('.item-title').should('contain.text', query);
      });
  });

  it('query를 가진 영화를 검색을 했다가 로고를 클릭하면 인기있는 영화 데이터를 가져온다.', () => {
    // 인기있는 영화 API에 대한 intercept
    cy.intercept(
      {
        method: 'GET',
        url: /^https:\/\/api.themoviedb.org\/3\/movie\/popular*/,
      },
      { fixture: 'movie-popular.json' }
    );
    // query로 검색한 영화 API에 대한 intercept
    cy.intercept(
      {
        method: 'GET',
        url: /^https:\/\/api.themoviedb.org\/3\/movie\/search*/,
      },
      { fixture: 'movie-search.json' }
    );

    // 사이트 방문
    cy.visit('/');

    // query 설정
    const query = '원피스';

    // input box에 query 삽입 및 검색
    cy.get('.search-input').type(query);
    cy.get('.search-button').click();

    // 현재 영화 목록 정보의 타이틀 확인
    cy.get('.movie-list-title').should('have.text', `"${query}" 검색 결과`);

    // 로고 클릭
    cy.get('header > h1 > #logo').click();

    // 인기있는 영화 목록 타이틀과 길이 확인
    cy.get('.movie-list-title').should('have.text', '지금 인기있는 영화');
    cy.get('.item-list').children().should('have.length', 20);
  });

  it.skip('영화 포스터를 클릭했을 떄, 상세보기 정보가 나온다.', () => {
    // 인기있는 영화 API intercept
    cy.intercept(
      {
        method: 'GET',
        url: /^https:\/\/api.themoviedb.org\/3\/movie\/popular*/,
      },
      { fixture: 'movie-popular.json' }
    );

    // 사이트 방문
    cy.visit('/');

    // 현재 영화 목록 정보의 타이틀 확인
    cy.get('.movie-list-title').should('have.text', '지금 인기있는 영화');

    // 불러와진 영화 목록 개수 20개인지 확인
    cy.get('.item-list').children().should('have.length', 20);

    cy.wait(2000).then(() => {
      cy.get('.item-list').children().first().click();
    });
  });
});
