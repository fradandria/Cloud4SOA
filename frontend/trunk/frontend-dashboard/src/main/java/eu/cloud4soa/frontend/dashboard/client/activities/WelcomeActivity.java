/*
 * This file is part of Cloud4SOA Frontend.
 *
 *     Cloud4SOA Frontend is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Cloud4SOA Frontend is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Cloud4SOA Frontend.  If not, see <http://www.gnu.org/licenses/>.
 */

package eu.cloud4soa.frontend.dashboard.client.activities;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;
import eu.cloud4soa.frontend.commons.client.Cloud4SOAUIClientFactory;
import eu.cloud4soa.frontend.commons.client.Cloud4SoaActivity;
import eu.cloud4soa.frontend.dashboard.client.views.WelcomeView;

/**
 * The welcome page activity.
 *
 * @author Stefano Travelli (Cyntelix)
 */
public class WelcomeActivity extends Cloud4SoaActivity implements WelcomeView.Presenter {

    private WelcomeView view;

    public WelcomeActivity(Place place, Cloud4SOAUIClientFactory clientFactory) {
        super(place, clientFactory);
    }

    @Override
    public void start(AcceptsOneWidget panel, EventBus eventBus) {
        view = GWT.create(WelcomeView.class);
        view.setPresenter(this);

        panel.setWidget(view.asWidget());
        registerViewDetacher(view);
    }
}