import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="mdl-mini-footer">
                <div class="mdl-mini-footer__left-section">
                    <div class="mdl-logo">Shopping List</div>
                    <ul class="mdl-mini-footer__link-list">
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Privacy & Terms</a></li>
                    </ul>
                </div>
                </footer>
            </div>
        )
    }
}
