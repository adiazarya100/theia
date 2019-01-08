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

import { FrontendApplicationConfig } from '@theia/application-package';

/**
 * Interface defining available branding properties.
 */
export interface BrandingProps {
    /**
     * The resource path for the dark theme main icon.
     */
    darkMain: string,
    /**
     * The resource path for the dark theme menu icon.
     */
    darkMenu: string,
    /**
     * The resource path for the light theme main icon.
     */
    lightMain: string,
    /**
     * The resource path for the light theme menu icon.
     */
    lightMenu: string,
    /**
     * The main icon size.
     */
    mainSize: string,
}

export interface BrandingFrontendApplicationConfig extends FrontendApplicationConfig {
    readonly branding?: BrandingProps,
}
