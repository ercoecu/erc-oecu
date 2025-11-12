// 記事（PDFなど）を読み込んで表示する関数
function loadarticles() {
    const container = document.getElementById('pdf-container');
    
    if (!container) {
        console.error('PDF container not found');
        return;
    }

    // list.js から読み込まれた articleList を参照
    if (typeof articleList === 'undefined' || !articleList || articleList.length === 0) {
        // articleList が存在しないか、空の場合
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📄</div>
                <p>現在、公開されている資料はありません。</p>
                <p style="margin-top: 1rem; font-size: 0.9rem;">'list.js' ファイルに記事情報を追加してください。</p>
            </div>
        `;
        
        if (typeof articleList === 'undefined') {
            console.error("'list.js' が 'script.js' の前に読み込まれているか確認してください。");
        }
        return;
    }

    // 記事カードを生成
    container.innerHTML = '';
    articleList.forEach((article, index) => {
        const pdfCard = createPDFCard(article, index);
        container.appendChild(pdfCard);
    });
}

// PDFカードを作成する関数
function createPDFCard(article, index) {
    const card = document.createElement('div');
    card.className = 'pdf-card';
    
    // 'file' プロパティには 'report.pdf' のようなファイル名が入ることを想定
    // 'article/' フォルダを基準のパスとして追加します
    const fileName = `article/${article.file}`; 
    
    const displayName = article.name || article.title || '無題の資料';
    const description = article.description || '';
    const fileSize = article.size || '';
    const uploadDate = article.date || '';

    card.innerHTML = `
        <div class="pdf-icon">📄</div>
        <div class="pdf-info">
            <div class="pdf-title">${escapeHtml(displayName)}</div>
            ${description ? `<p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 0.5rem;">${escapeHtml(description)}</p>` : ''}
            <div class="pdf-meta">
                ${fileSize ? `<span>サイズ: ${fileSize}</span>` : ''}
                ${uploadDate ? `<span>${fileSize ? ' | ' : ''}${uploadDate}</span>` : ''}
            </div>
            <div class="pdf-actions">
                <a href="${fileName}" target="_blank" class="btn btn-primary">開く</a>
                <a href="${fileName}" download class="btn btn-secondary">ダウンロード</a>
            </div>
        </div>
    `;

    return card;
}

// HTMLエスケープ関数
function escapeHtml(text) {
    if (typeof text !== 'string') {
        return '';
    }
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// スムーズスクロールの実装
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ページ読み込み時に記事を読み込む
document.addEventListener('DOMContentLoaded', () => {
    loadarticles();
});