import dash
from dash import dcc, html
from dash.dependencies import Input, Output

# 假设 multiselect 是一个多选组件，这里假设您已经有了多选组件
import multiselect

app = dash.Dash(__name__)

# Layout with a multiselect component and a button to display selected options
app.layout = html.Div([
    multiselect.multiselect(
        id='checklist-component',
        options=[
            {'label': 'Option 1', 'value': 'option1'},
            {'label': 'Option 2', 'value': 'option2'},
            {'label': 'Option 3', 'value': 'option3'}
        ],
        value=['option1']
    ),
    html.Button('Show Selected', id='show-button', n_clicks=0),
    html.Div(id='output-container')  # Display selected values here
])

# Callback to update output container when button is clicked
@app.callback(
    Output('output-container', 'children'),
    Input('show-button', 'n_clicks'),
    Input('checklist-component', 'value')
)
def update_output(n_clicks, selected_values):
    if n_clicks > 0:
        return f'Selected options: {", ".join(selected_values)}'
    return ''

if __name__ == '__main__':
    app.run_server(debug=True)
