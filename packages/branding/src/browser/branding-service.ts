/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { BrandingStyle } from './branding-style';
import { BuiltinThemeProvider } from '@theia/core/lib/browser/theming';
import { BrandingProps, BrandingFrontendApplicationConfig } from './branding-props';
import { FrontendApplicationConfigProvider } from '@theia/core/lib/browser/frontend-application-config-provider';

class BrandingService {

    /**
     * Selectors for branding options.
     */
    protected static readonly MAIN_SELECTOR = '#theia-main-content-panel';
    protected static readonly MENU_SELECTOR = '.theia-icon';

    protected static style: BrandingStyle;

    protected static brandingProps: BrandingProps;

    /**
     * The default `Theia` branding proprties.
     */
    protected static readonly DEFAULT_BRANDING_PROPS: BrandingProps = {
        darkMain: require('../../src/browser/icons/theia-brand-logo-dark.png'),
        darkMenu: require('../../src/browser/icons/theia-menu-logo-dark.png'),
        lightMain: require('../../src/browser/icons/theia-brand-logo-light.png'),
        lightMenu: require('../../src/browser/icons/theia-menu-logo-light.png'),
        mainSize: '40%'
    };

    constructor() {
        BrandingService.style = new BrandingStyle();
        const config = FrontendApplicationConfigProvider.get() as BrandingFrontendApplicationConfig;
        BrandingService.brandingProps = config.branding || BrandingService.DEFAULT_BRANDING_PROPS;
        BrandingService.updateBranding();
    }

    /**
     * Set the application's branding properties.
     *
     * @param props BrandingProps
     */
    static setBranding(props: BrandingProps): void {
        this.brandingProps = props;
        this.updateBranding();
    }

    /**
     * Update branding for main, and menu icons.
     */
    private static updateBranding(): void {
        this.setMainIcon();
        this.setMenuIcon();
    }

    /**
     * Set the main icon style.
     */
    private static setMainIcon(): void {
        this.style.insertRule(this.MAIN_SELECTOR, theme =>
            `
            background-image: url("${theme.id === BuiltinThemeProvider.lightTheme.id
                ? this.brandingProps.lightMain
                : this.brandingProps.darkMain
            }");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: ${BrandingService.DEFAULT_BRANDING_PROPS.mainSize};
            `
        );
    }

    /**
     * Set the menu icon style.
     */
    private static setMenuIcon(): void {
        this.style.insertRule(this.MENU_SELECTOR, theme =>
            `
            background-image: url("${theme.id === BuiltinThemeProvider.lightTheme.id
                ? this.brandingProps.lightMenu
                : this.brandingProps.darkMenu
            }");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            `
        );
    }
}

export const BrandingThemeService = new BrandingService();
