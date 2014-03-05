




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>bootstrap-sortable/Scripts/bootstrap-sortable.js at master · drvic10k/bootstrap-sortable</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="drvic10k/bootstrap-sortable" name="twitter:title" /><meta content="bootstrap-sortable - adding sorting ability to bootstrap table" name="twitter:description" /><meta content="https://avatars.githubusercontent.com/u/3754571" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars.githubusercontent.com/u/3754571" property="og:image" /><meta content="drvic10k/bootstrap-sortable" property="og:title" /><meta content="https://github.com/drvic10k/bootstrap-sortable" property="og:url" /><meta content="bootstrap-sortable - adding sorting ability to bootstrap table" property="og:description" />

    <meta name="hostname" content="github-fe136-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="62DA0502:6761:9B15158:5313FEF4" name="octolytics-dimension-request_id" /><meta content="969188" name="octolytics-actor-id" /><meta content="a-bort" name="octolytics-actor-login" /><meta content="561e90c1c2f32c760fcce7babc6bda296370018b4a21d815611bec14e241756b" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="FEkLtsef11EIlk7via6rbF7LqyCa1/Fk7cyBolfzrsQ=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-3eb3754d4f9f6036875199a01278c6ad6cc3d2ad.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-cb91aec5b799e43ecbc2cb6ac665bc7289f0d01e.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-75c3712476c7af863873362d0cdf06a94a4b4fa3.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-aef5ca1c0d9fbe8f9125d767fefad5681858c1cb.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="2067e2d72c7a1e7b1b8487fd76aa041c">

        <link data-pjax-transient rel='permalink' href='/drvic10k/bootstrap-sortable/blob/d6ec21a836b719e211f906a1a634abaa3d9f6bbc/Scripts/bootstrap-sortable.js'>

  <meta name="description" content="bootstrap-sortable - adding sorting ability to bootstrap table" />

  <meta content="3754571" name="octolytics-dimension-user_id" /><meta content="drvic10k" name="octolytics-dimension-user_login" /><meta content="8534533" name="octolytics-dimension-repository_id" /><meta content="drvic10k/bootstrap-sortable" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8534533" name="octolytics-dimension-repository_network_root_id" /><meta content="drvic10k/bootstrap-sortable" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/drvic10k/bootstrap-sortable/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-sortable:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="a-bort"
      data-repo="drvic10k/bootstrap-sortable"
      data-branch="master"
      data-sha="ffcd64fa3540faa396097b100e0cf91f564a18cb"
  >

    <input type="hidden" name="nwo" value="drvic10k/bootstrap-sortable" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/a-bort" class="name">
        <img alt="a-bort" class=" js-avatar" data-user="969188" height="20" src="https://avatars.githubusercontent.com/u/969188" width="20" /> a-bort
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="drvic10k/bootstrap-sortable">This repository</span>
    </li>
      <li>
        <a href="/drvic10k/bootstrap-sortable/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="FEkLtsef11EIlk7via6rbF7LqyCa1/Fk7cyBolfzrsQ=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="8534533" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/drvic10k/bootstrap-sortable/watchers">
        12
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/drvic10k/bootstrap-sortable/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/drvic10k/bootstrap-sortable/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/drvic10k/bootstrap-sortable/stargazers">
        138
      </a>
  </div>

  </li>


        <li>
          <a href="/drvic10k/bootstrap-sortable/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/drvic10k/bootstrap-sortable/network" class="social-count">53</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/drvic10k" class="url fn" itemprop="url" rel="author"><span itemprop="title">drvic10k</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/drvic10k/bootstrap-sortable" class="js-current-repository js-repo-home-link">bootstrap-sortable</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/drvic10k/bootstrap-sortable" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /drvic10k/bootstrap-sortable">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/drvic10k/bootstrap-sortable/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /drvic10k/bootstrap-sortable/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/drvic10k/bootstrap-sortable/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /drvic10k/bootstrap-sortable/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/drvic10k/bootstrap-sortable/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /drvic10k/bootstrap-sortable/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/drvic10k/bootstrap-sortable/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /drvic10k/bootstrap-sortable/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/drvic10k/bootstrap-sortable/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /drvic10k/bootstrap-sortable/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/drvic10k/bootstrap-sortable/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /drvic10k/bootstrap-sortable/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/drvic10k/bootstrap-sortable.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/drvic10k/bootstrap-sortable.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:drvic10k/bootstrap-sortable.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:drvic10k/bootstrap-sortable.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/drvic10k/bootstrap-sortable" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/drvic10k/bootstrap-sortable" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/drvic10k/bootstrap-sortable/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:2dee9de03384406370fbc5595d354ccd -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/drvic10k/bootstrap-sortable/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drvic10k/bootstrap-sortable/blob/gh-pages/Scripts/bootstrap-sortable.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drvic10k/bootstrap-sortable/blob/master/Scripts/bootstrap-sortable.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drvic10k/bootstrap-sortable/tree/1.8.0/Scripts/bootstrap-sortable.js"
                 data-name="1.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.8.0">1.8.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/drvic10k/bootstrap-sortable" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap-sortable</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/drvic10k/bootstrap-sortable/tree/master/Scripts" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Scripts</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-sortable.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="Scripts/bootstrap-sortable.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Misha Koryak" class="main-avatar js-avatar" data-user="383817" height="24" src="https://avatars.githubusercontent.com/u/383817" width="24" />
    <span class="author"><a href="/mkoryak" rel="author">mkoryak</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-01-29T08:10:09-08:00" title="2014-01-29 08:10:09">January 29, 2014</time>
    <div class="commit-title">
        <a href="/drvic10k/bootstrap-sortable/commit/23004f565f80aed405120c34449b43c6e2ec1167" class="message" data-pjax="true" title="cache the parent table so that floatThead can be used with this plugin">cache the parent table so that floatThead can be used with this plugin</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="drvic10k" href="/drvic10k/bootstrap-sortable/commits/master/Scripts/bootstrap-sortable.js?author=drvic10k"><img alt="Matúš Brliť" class=" js-avatar" data-user="3754571" height="20" src="https://avatars.githubusercontent.com/u/3754571" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mkoryak" href="/drvic10k/bootstrap-sortable/commits/master/Scripts/bootstrap-sortable.js?author=mkoryak"><img alt="Misha Koryak" class=" js-avatar" data-user="383817" height="20" src="https://avatars.githubusercontent.com/u/383817" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="commel" href="/drvic10k/bootstrap-sortable/commits/master/Scripts/bootstrap-sortable.js?author=commel"><img alt="Bernd Ritter" class=" js-avatar" data-user="1015465" height="20" src="https://avatars.githubusercontent.com/u/1015465" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="EugenyLoy" href="/drvic10k/bootstrap-sortable/commits/master/Scripts/bootstrap-sortable.js?author=EugenyLoy"><img alt="Eugeny Loy" class=" js-avatar" data-user="1393825" height="20" src="https://avatars.githubusercontent.com/u/1393825" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Matúš Brliť" class=" js-avatar" data-user="3754571" height="24" src="https://avatars.githubusercontent.com/u/3754571" width="24" />
            <a href="/drvic10k">drvic10k</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Misha Koryak" class=" js-avatar" data-user="383817" height="24" src="https://avatars.githubusercontent.com/u/383817" width="24" />
            <a href="/mkoryak">mkoryak</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Bernd Ritter" class=" js-avatar" data-user="1015465" height="24" src="https://avatars.githubusercontent.com/u/1015465" width="24" />
            <a href="/commel">commel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Eugeny Loy" class=" js-avatar" data-user="1393825" height="24" src="https://avatars.githubusercontent.com/u/1393825" width="24" />
            <a href="/EugenyLoy">EugenyLoy</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>130 lines (110 sloc)</span>
          <span class="meta-divider"></span>
        <span>9.084 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/drvic10k/bootstrap-sortable/edit/master/Scripts/bootstrap-sortable.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/drvic10k/bootstrap-sortable/raw/master/Scripts/bootstrap-sortable.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/drvic10k/bootstrap-sortable/blame/master/Scripts/bootstrap-sortable.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/drvic10k/bootstrap-sortable/commits/master/Scripts/bootstrap-sortable.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped tooltipped-s"
             href="/drvic10k/bootstrap-sortable/delete/master/Scripts/bootstrap-sortable.js"
             aria-label="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/* TINY SORT modified according to this https://github.com/Sjeiti/TinySort/pull/51*/</span></div><div class='line' id='LC2'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="kd">function</span> <span class="nx">h</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">e</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span> <span class="o">?</span> <span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">:</span> <span class="nx">e</span> <span class="p">}</span> <span class="kd">function</span> <span class="nx">p</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">r</span> <span class="o">&lt;</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">r</span><span class="o">++</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="nx">r</span><span class="p">]</span> <span class="o">==</span> <span class="nx">t</span><span class="p">)</span> <span class="k">return</span> <span class="o">!</span><span class="nx">n</span><span class="p">;</span> <span class="k">return</span> <span class="nx">n</span> <span class="p">}</span> <span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="o">!</span><span class="mi">1</span><span class="p">,</span> <span class="nx">r</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">,</span> <span class="nx">s</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">,</span> <span class="nx">o</span> <span class="o">=</span> <span class="sr">/(-?\d+\.?\d*)$/g</span><span class="p">,</span> <span class="nx">u</span> <span class="o">=</span> <span class="sr">/(\d+\.?\d*)$/g</span><span class="p">,</span> <span class="nx">a</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">f</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">l</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="k">typeof</span> <span class="nx">e</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span> <span class="p">},</span> <span class="nx">c</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">||</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">n</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">n</span> <span class="o">+=</span> <span class="nx">t</span><span class="p">;</span> <span class="k">for</span> <span class="p">(;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">t</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="k">in</span> <span class="k">this</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span> <span class="o">===</span> <span class="nx">e</span><span class="p">)</span> <span class="k">return</span> <span class="nx">n</span> <span class="p">}</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span> <span class="p">};</span> <span class="nx">e</span><span class="p">.</span><span class="nx">tinysort</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;TinySort&quot;</span><span class="p">,</span> <span class="nx">version</span><span class="o">:</span> <span class="s2">&quot;1.5.2&quot;</span><span class="p">,</span> <span class="nx">copyright</span><span class="o">:</span> <span class="s2">&quot;Copyright (c) 2008-2013 Ron Valstar&quot;</span><span class="p">,</span> <span class="nx">uri</span><span class="o">:</span> <span class="s2">&quot;http://tinysort.sjeiti.com/&quot;</span><span class="p">,</span> <span class="nx">licensed</span><span class="o">:</span> <span class="p">{</span> <span class="nx">MIT</span><span class="o">:</span> <span class="s2">&quot;http://www.opensource.org/licenses/mit-license.php&quot;</span><span class="p">,</span> <span class="nx">GPL</span><span class="o">:</span> <span class="s2">&quot;http://www.gnu.org/licenses/gpl.html&quot;</span> <span class="p">},</span> <span class="nx">plugin</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">a</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span> <span class="nx">f</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">};</span> <span class="nx">e</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">=</span> <span class="nx">c</span><span class="p">;</span> <span class="k">return</span> <span class="nx">e</span> <span class="p">}(),</span> <span class="nx">defaults</span><span class="o">:</span> <span class="p">{</span> <span class="nx">order</span><span class="o">:</span> <span class="s2">&quot;asc&quot;</span><span class="p">,</span> <span class="nx">attr</span><span class="o">:</span> <span class="nx">r</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">r</span><span class="p">,</span> <span class="nx">useVal</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">place</span><span class="o">:</span> <span class="s2">&quot;start&quot;</span><span class="p">,</span> <span class="nx">returns</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">cases</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">forceStrings</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">ignoreDashes</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">sortFunction</span><span class="o">:</span> <span class="nx">r</span> <span class="p">}</span> <span class="p">};</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span> <span class="nx">tinysort</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">v</span><span class="p">,</span> <span class="nx">m</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">g</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">y</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">b</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">w</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">E</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">S</span><span class="p">,</span> <span class="nx">x</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">T</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">N</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">n</span><span class="p">)</span> <span class="p">{</span> <span class="nx">n</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">})</span> <span class="p">},</span> <span class="nx">C</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="k">if</span> <span class="p">(</span><span class="nx">E</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">E</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="k">while</span> <span class="p">(</span><span class="nx">s</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span> <span class="o">&lt;</span> <span class="nx">S</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">w</span><span class="p">[</span><span class="nx">E</span><span class="p">],</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">oSettings</span><span class="p">,</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">ignoreDashes</span> <span class="o">?</span> <span class="nx">u</span> <span class="o">:</span> <span class="nx">o</span><span class="p">;</span> <span class="nx">N</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">sortFunction</span><span class="p">)</span> <span class="p">{</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">sortFunction</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">order</span> <span class="o">==</span> <span class="s2">&quot;rand&quot;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">s</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">&lt;</span> <span class="p">.</span><span class="mi">5</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span> <span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">d</span> <span class="o">=</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">v</span> <span class="o">=</span> <span class="o">!</span><span class="nx">c</span><span class="p">.</span><span class="nx">cases</span> <span class="o">?</span> <span class="nx">h</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span><span class="nx">E</span><span class="p">])</span> <span class="o">:</span> <span class="nx">t</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span><span class="nx">E</span><span class="p">],</span> <span class="nx">m</span> <span class="o">=</span> <span class="o">!</span><span class="nx">c</span><span class="p">.</span><span class="nx">cases</span> <span class="o">?</span> <span class="nx">h</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span><span class="nx">E</span><span class="p">])</span> <span class="o">:</span> <span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span><span class="nx">E</span><span class="p">];</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">v</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\s*/i</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s*$/i</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\s*/i</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s*$/i</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">A</span><span class="p">.</span><span class="nx">forceStrings</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">g</span> <span class="o">=</span> <span class="nx">l</span><span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="o">?</span> <span class="nx">v</span> <span class="o">&amp;&amp;</span> <span class="nx">v</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">l</span><span class="p">(</span><span class="nx">m</span><span class="p">)</span> <span class="o">?</span> <span class="nx">m</span> <span class="o">&amp;&amp;</span> <span class="nx">m</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="o">:</span> <span class="nx">n</span><span class="p">;</span> <span class="k">if</span> <span class="p">(</span><span class="nx">g</span> <span class="o">&amp;&amp;</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">v</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">v</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">g</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">),</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">m</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">y</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">b</span> <span class="o">==</span> <span class="nx">x</span><span class="p">)</span> <span class="p">{</span> <span class="nx">d</span> <span class="o">=</span> <span class="o">!</span><span class="nx">n</span><span class="p">;</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">i</span><span class="p">(</span><span class="nx">g</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">i</span><span class="p">(</span><span class="nx">y</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">}</span> <span class="p">}</span> <span class="p">}</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">iAsc</span> <span class="o">*</span> <span class="p">(</span><span class="nx">v</span> <span class="o">&lt;</span> <span class="nx">m</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span> <span class="nx">v</span> <span class="o">&gt;</span> <span class="nx">m</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">)</span> <span class="p">}</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">v</span><span class="p">,</span> <span class="nx">m</span><span class="p">,</span> <span class="nx">s</span><span class="p">)</span> <span class="p">});</span> <span class="k">if</span> <span class="p">(</span><span class="nx">s</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">E</span><span class="o">++</span> <span class="p">}</span> <span class="k">return</span> <span class="nx">s</span> <span class="p">};</span> <span class="k">for</span> <span class="p">(</span><span class="nx">d</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">d</span> <span class="o">&lt;</span> <span class="nx">v</span><span class="p">;</span> <span class="nx">d</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">d</span><span class="p">];</span> <span class="k">if</span> <span class="p">(</span><span class="nx">l</span><span class="p">(</span><span class="nx">k</span><span class="p">))</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span><span class="nx">x</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">&gt;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span> <span class="p">}</span> <span class="p">}</span> <span class="k">if</span> <span class="p">(</span><span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">S</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="k">if</span> <span class="p">(</span><span class="nx">S</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="nx">S</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">push</span><span class="p">({})</span> <span class="p">}</span> <span class="k">for</span> <span class="p">(</span><span class="nx">d</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">S</span><span class="p">;</span> <span class="nx">d</span> <span class="o">&lt;</span> <span class="nx">v</span><span class="p">;</span> <span class="nx">d</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">L</span> <span class="o">=</span> <span class="nx">x</span><span class="p">[</span><span class="nx">d</span><span class="p">],</span> <span class="nx">A</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">e</span><span class="p">.</span><span class="nx">tinysort</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">T</span><span class="p">[</span><span class="nx">d</span><span class="p">]),</span> <span class="nx">O</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span><span class="o">!</span><span class="nx">L</span> <span class="o">||</span> <span class="nx">L</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span><span class="p">),</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">O</span> <span class="o">&amp;&amp;</span> <span class="nx">L</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="s2">&quot;:&quot;</span><span class="p">;</span> <span class="nx">w</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span> <span class="nx">sFind</span><span class="o">:</span> <span class="nx">L</span><span class="p">,</span> <span class="nx">oSettings</span><span class="o">:</span> <span class="nx">A</span><span class="p">,</span> <span class="nx">bFind</span><span class="o">:</span> <span class="nx">O</span><span class="p">,</span> <span class="nx">bAttr</span><span class="o">:</span> <span class="o">!</span><span class="p">(</span><span class="nx">A</span><span class="p">.</span><span class="nx">attr</span> <span class="o">===</span> <span class="nx">r</span> <span class="o">||</span> <span class="nx">A</span><span class="p">.</span><span class="nx">attr</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span><span class="p">),</span> <span class="nx">bData</span><span class="o">:</span> <span class="nx">A</span><span class="p">.</span><span class="nx">data</span> <span class="o">!==</span> <span class="nx">r</span><span class="p">,</span> <span class="nx">bFilter</span><span class="o">:</span> <span class="nx">M</span><span class="p">,</span> <span class="nx">$Filter</span><span class="o">:</span> <span class="nx">M</span> <span class="o">?</span> <span class="nx">m</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="o">:</span> <span class="nx">m</span><span class="p">,</span> <span class="nx">fnSort</span><span class="o">:</span> <span class="nx">A</span><span class="p">.</span><span class="nx">sortFunction</span><span class="p">,</span> <span class="nx">iAsc</span><span class="o">:</span> <span class="nx">A</span><span class="p">.</span><span class="nx">order</span> <span class="o">==</span> <span class="s2">&quot;asc&quot;</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span> <span class="p">})</span> <span class="p">}</span> <span class="nx">m</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">n</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">e</span><span class="p">(</span><span class="nx">r</span><span class="p">),</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">i</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span> <span class="nx">o</span><span class="p">,</span> <span class="nx">u</span> <span class="o">=</span> <span class="p">[];</span> <span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">S</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">w</span><span class="p">[</span><span class="nx">j</span><span class="p">],</span> <span class="nx">f</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">bFind</span> <span class="o">?</span> <span class="nx">a</span><span class="p">.</span><span class="nx">bFilter</span> <span class="o">?</span> <span class="nx">a</span><span class="p">.</span><span class="nx">$Filter</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span> <span class="o">:</span> <span class="nx">i</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">sFind</span><span class="p">)</span> <span class="o">:</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">u</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">bData</span> <span class="o">?</span> <span class="nx">f</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">oSettings</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="o">:</span> <span class="nx">a</span><span class="p">.</span><span class="nx">bAttr</span> <span class="o">?</span> <span class="nx">f</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">oSettings</span><span class="p">.</span><span class="nx">attr</span><span class="p">)</span> <span class="o">:</span> <span class="nx">a</span><span class="p">.</span><span class="nx">oSettings</span><span class="p">.</span><span class="nx">useVal</span> <span class="o">?</span> <span class="nx">f</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="p">());</span> <span class="k">if</span> <span class="p">(</span><span class="nx">o</span> <span class="o">===</span> <span class="nx">t</span><span class="p">)</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">f</span> <span class="p">}</span> <span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">s</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">l</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">y</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">s</span><span class="o">:</span> <span class="p">[],</span> <span class="nx">n</span><span class="o">:</span> <span class="p">[]</span> <span class="p">}</span> <span class="p">}</span> <span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">y</span><span class="p">[</span><span class="nx">l</span><span class="p">].</span><span class="nx">s</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span> <span class="nx">s</span><span class="o">:</span> <span class="nx">u</span><span class="p">,</span> <span class="nx">e</span><span class="o">:</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">n</span><span class="o">:</span> <span class="nx">n</span> <span class="p">});</span> <span class="k">else</span> <span class="nx">y</span><span class="p">[</span><span class="nx">l</span><span class="p">].</span><span class="nx">n</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span> <span class="nx">e</span><span class="o">:</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">n</span><span class="o">:</span> <span class="nx">n</span> <span class="p">})</span> <span class="p">});</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">y</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">t</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="nx">C</span><span class="p">)</span> <span class="p">});</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">y</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">o</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">u</span> <span class="o">=</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">a</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">];</span> <span class="k">switch</span> <span class="p">(</span><span class="nx">A</span><span class="p">.</span><span class="nx">place</span><span class="p">)</span> <span class="p">{</span> <span class="k">case</span> <span class="s2">&quot;first&quot;</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">u</span> <span class="o">=</span> <span class="nx">s</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span> <span class="nx">t</span><span class="p">.</span><span class="nx">n</span><span class="p">)</span> <span class="p">});</span> <span class="k">break</span><span class="p">;</span> <span class="k">case</span> <span class="s2">&quot;org&quot;</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">o</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">n</span><span class="p">)</span> <span class="p">});</span> <span class="k">break</span><span class="p">;</span> <span class="k">case</span> <span class="s2">&quot;end&quot;</span><span class="o">:</span> <span class="nx">u</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nx">n</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="k">break</span><span class="p">;</span> <span class="k">default</span><span class="o">:</span> <span class="nx">u</span> <span class="o">=</span> <span class="mi">0</span> <span class="p">}</span> <span class="k">for</span> <span class="p">(</span><span class="nx">d</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">d</span> <span class="o">&lt;</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">d</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">f</span> <span class="o">=</span> <span class="nx">p</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="o">?</span> <span class="o">!</span><span class="nx">n</span> <span class="o">:</span> <span class="nx">d</span> <span class="o">&gt;=</span> <span class="nx">u</span> <span class="o">&amp;&amp;</span> <span class="nx">d</span> <span class="o">&lt;</span> <span class="nx">u</span> <span class="o">+</span> <span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="p">(</span><span class="nx">f</span> <span class="o">?</span> <span class="nx">r</span><span class="p">.</span><span class="nx">s</span> <span class="o">:</span> <span class="nx">r</span><span class="p">.</span><span class="nx">n</span><span class="p">)[</span><span class="nx">a</span><span class="p">[</span><span class="nx">f</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="mi">1</span><span class="p">]].</span><span class="nx">e</span><span class="p">;</span> <span class="nx">l</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="nx">l</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">f</span> <span class="o">||</span> <span class="o">!</span><span class="nx">A</span><span class="p">.</span><span class="nx">returns</span><span class="p">)</span> <span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span> <span class="nx">a</span><span class="p">[</span><span class="nx">f</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="mi">1</span><span class="p">]</span><span class="o">++</span> <span class="p">}</span> <span class="p">});</span> <span class="nx">m</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">g</span><span class="p">);</span> <span class="k">return</span> <span class="nx">m</span> <span class="p">}</span> <span class="p">});</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">TinySort</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">Tinysort</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tsort</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tinysort</span> <span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$document</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">),</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bsSort</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastSort</span><span class="p">,</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">signClass</span><span class="p">;</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">bootstrapSortable</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">applyLast</span><span class="p">,</span> <span class="nx">sign</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// check if moment.js is available</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">momentJsAvailable</span> <span class="o">=</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">moment</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">);</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Set class based on sign parameter</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">signClass</span> <span class="o">=</span> <span class="o">!</span><span class="nx">sign</span> <span class="o">?</span> <span class="s2">&quot;arrow&quot;</span> <span class="o">:</span> <span class="nx">sign</span><span class="p">;</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set attributes needed for sorting</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;table.sortable&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">applyLast</span> <span class="o">=</span> <span class="p">(</span><span class="nx">applyLast</span> <span class="o">===</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;span.sign&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;thead tr&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">rowIndex</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">columnsSkipped</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;th&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">columnIndex</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-sortcolumn&#39;</span><span class="p">,</span> <span class="nx">columnIndex</span> <span class="o">+</span> <span class="nx">columnsSkipped</span><span class="p">);</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-sortkey&#39;</span><span class="p">,</span> <span class="nx">columnIndex</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">rowIndex</span><span class="p">);</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;colspan&quot;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">columnsSkipped</span> <span class="o">+=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;colspan&quot;</span><span class="p">))</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;td&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-dateformat&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">momentJsAvailable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-value&#39;</span><span class="p">,</span> <span class="nx">moment</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">text</span><span class="p">(),</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-dateformat&#39;</span><span class="p">)).</span><span class="nx">format</span><span class="p">(</span><span class="s1">&#39;YYYY/MM/DD/HH/mm/ss&#39;</span><span class="p">));</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-value&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-value&#39;</span><span class="p">,</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">text</span><span class="p">());</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;thead th[data-defaultsort!=&quot;disabled&quot;]&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$sortTable</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;table.sortable&#39;</span><span class="p">);</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;sortTable&#39;</span><span class="p">,</span> <span class="nx">$sortTable</span><span class="p">);</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sortKey</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-sortkey&#39;</span><span class="p">);</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">thisLastSort</span> <span class="o">=</span> <span class="nx">applyLast</span> <span class="o">?</span> <span class="nx">lastSort</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">]</span> <span class="o">=</span> <span class="nx">applyLast</span> <span class="o">?</span> <span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">]</span> <span class="o">:</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-defaultsort&#39;</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">applyLast</span> <span class="o">==</span> <span class="p">(</span><span class="nx">sortKey</span> <span class="o">==</span> <span class="nx">thisLastSort</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;asc&#39;</span> <span class="o">?</span> <span class="s1">&#39;desc&#39;</span> <span class="o">:</span> <span class="s1">&#39;asc&#39;</span><span class="p">;</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doSort</span><span class="p">(</span><span class="nx">$this</span><span class="p">,</span> <span class="nx">$sortTable</span><span class="p">)</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;sorted&#39;</span><span class="p">);</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// add click event to table header</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="s1">&#39;table.sortable thead th[data-defaultsort!=&quot;disabled&quot;]&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">$table</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;sortTable&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;table.sortable&#39;</span><span class="p">);</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doSort</span><span class="p">(</span><span class="nx">$this</span><span class="p">,</span> <span class="nx">$table</span><span class="p">);</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$table</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;sorted&#39;</span><span class="p">);</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Sorting mechanism separated</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">doSort</span><span class="p">(</span><span class="nx">$this</span><span class="p">,</span> <span class="nx">$table</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sortColumn</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-sortcolumn&#39;</span><span class="p">);</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">colspan</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;colspan&#39;</span><span class="p">);</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">colspan</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">selector</span><span class="p">;</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">sortColumn</span><span class="p">)</span> <span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">sortColumn</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">colspan</span><span class="p">)</span> <span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">selector</span> <span class="o">=</span> <span class="nx">selector</span> <span class="o">+</span> <span class="s1">&#39;, [data-sortcolumn=&quot;&#39;</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">;</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">subHeader</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">selector</span><span class="p">).</span><span class="nx">not</span><span class="p">(</span><span class="s1">&#39;[colspan]&#39;</span><span class="p">);</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mainSort</span> <span class="o">=</span> <span class="nx">subHeader</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;[data-mainsort]&#39;</span><span class="p">).</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sortColumn</span> <span class="o">=</span> <span class="nx">mainSort</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">mainSort</span> <span class="o">:</span> <span class="nx">subHeader</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doSort</span><span class="p">(</span><span class="nx">sortColumn</span><span class="p">,</span> <span class="nx">$table</span><span class="p">);</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//sortColumn = newColumn ? newColumn : sortColumn;</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">localSignClass</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-defaultsign&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">signClass</span><span class="p">;</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// update arrow icon</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">mozilla</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">moz_arrow</span> <span class="o">=</span> <span class="nx">$table</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;div.mozilla&#39;</span><span class="p">);</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">moz_arrow</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">moz_arrow</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">html</span><span class="p">(</span><span class="nx">moz_arrow</span><span class="p">.</span><span class="nx">text</span><span class="p">());</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">wrapInner</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;mozilla&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">children</span><span class="p">().</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;sign &#39;</span> <span class="o">+</span> <span class="nx">localSignClass</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$table</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;span.sign&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;sign &#39;</span> <span class="o">+</span> <span class="nx">localSignClass</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// sort direction</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sortKey</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-sortkey&#39;</span><span class="p">);</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastSort</span> <span class="o">=</span> <span class="nx">sortKey</span><span class="p">;</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;asc&#39;</span> <span class="o">?</span> <span class="s1">&#39;desc&#39;</span> <span class="o">:</span> <span class="s1">&#39;asc&#39;</span><span class="p">;</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;desc&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;span.sign&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;up&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// sort rows</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rows</span> <span class="o">=</span> <span class="nx">$table</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;tbody tr&#39;</span><span class="p">);</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rows</span><span class="p">.</span><span class="nx">tsort</span><span class="p">(</span><span class="s1">&#39;td:eq(&#39;</span> <span class="o">+</span> <span class="nx">sortColumn</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">order</span><span class="o">:</span> <span class="nx">bsSort</span><span class="p">[</span><span class="nx">sortKey</span><span class="p">],</span> <span class="nx">attr</span><span class="o">:</span> <span class="s1">&#39;data-value&#39;</span> <span class="p">});</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// jQuery 1.9 removed this object</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">browser</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">chrome</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">mozilla</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">opera</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">msie</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">safari</span><span class="o">:</span> <span class="kc">false</span> <span class="p">};</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ua</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">;</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span> <span class="o">=</span> <span class="p">((</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="s1">&#39;i&#39;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">ua</span><span class="p">)))</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">mozilla</span> <span class="o">&amp;&amp;</span> <span class="nx">c</span> <span class="o">==</span> <span class="s1">&#39;mozilla&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">mozilla</span> <span class="o">=</span> <span class="p">((</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;firefox&#39;</span><span class="p">,</span> <span class="s1">&#39;i&#39;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">ua</span><span class="p">)))</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">chrome</span> <span class="o">&amp;&amp;</span> <span class="nx">c</span> <span class="o">==</span> <span class="s1">&#39;safari&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">safari</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Initialise on DOM ready</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">bootstrapSortable</span><span class="p">);</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'><span class="p">}(</span><span class="nx">jQuery</span><span class="p">));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04406s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

